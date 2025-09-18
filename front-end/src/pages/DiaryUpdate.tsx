import { useQuery } from '@tanstack/react-query';
import { postsService } from '../services/PostsService';
import { useParams } from 'react-router';
import { Box, Typography, FormLabel, TextField, Button } from '@mui/material';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import type { AddPostInputs } from './Add';

const DiaryUpdatePage = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ['post'],
    queryFn: () => postsService.getPostDetails(id!),
  });

  const [inputs, setInputs] = useState<AddPostInputs>({
    title: '',
    description: '',
    imageUrl: '',
    location: '',
    date: '',
  });

  useEffect(() => {
    if (data) {
      setInputs({
        title: data.post.title || '',
        description: data.post.description || '',
        imageUrl: data.post.image || '',
        location: data.post.location || '',
        date: data.post.date ? data.post.date.slice(0, 10) : '',
      });
    }
  }, [data]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await postsService.updatePost(id!, inputs);
  };
  return (
    <Box display="flex" flexDirection="column" width="100%" height="100%">
      <Box display="flex" margin="auto" padding={2}>
        <Typography variant="h4" fontFamily="dancing script" fontWeight="bold">
          Add Your Travel Diary
        </Typography>
        <TravelExploreIcon
          sx={{ fontSize: '40px', paddingLeft: 1, color: 'lightcoral' }}
        />
      </Box>
      <form onSubmit={handleSubmit}>
        <Box
          padding={3}
          display="flex"
          flexDirection="column"
          margin="auto"
          width="80%"
        >
          <FormLabel>Title</FormLabel>
          <TextField
            onChange={handleInputChange}
            value={inputs.title}
            name="title"
            variant="standard"
            margin="normal"
          />
          <FormLabel>Description</FormLabel>
          <TextField
            onChange={handleInputChange}
            value={inputs.description}
            name="description"
            variant="standard"
            margin="normal"
          />
          <FormLabel>Image URL</FormLabel>
          <TextField
            onChange={handleInputChange}
            value={inputs.imageUrl}
            name="imageUrl"
            variant="standard"
            margin="normal"
          />
          <FormLabel>Location</FormLabel>
          <TextField
            onChange={handleInputChange}
            value={inputs.location}
            name="location"
            variant="standard"
            margin="normal"
          />
          <FormLabel>Date</FormLabel>
          <TextField
            type="date"
            onChange={handleInputChange}
            value={inputs.date}
            name="date"
            variant="standard"
            margin="normal"
          />
          <Button
            type="submit"
            color="warning"
            variant="contained"
            sx={{ width: '50%', margin: 'auto', mt: 2, borderRadius: 7 }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default DiaryUpdatePage;

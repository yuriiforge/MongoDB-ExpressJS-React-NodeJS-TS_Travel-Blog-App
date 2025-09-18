import { Box, Button, FormLabel, TextField, Typography } from '@mui/material';
import TravelExporeIcon from '@mui/icons-material/TravelExplore';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { postsService } from '../services/PostsService';

export interface AddPostInputs {
  title: string;
  description: string;
  imageUrl: string;
  location: string;
  date: string;
}

const AddPage = () => {
  const [inputs, setInputs] = useState<AddPostInputs>({
    title: '',
    description: '',
    imageUrl: '',
    location: '',
    date: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await postsService.addPost(inputs);
  };

  return (
    <Box display="flex" flexDirection="column" width="100%" height="100%">
      <Box display="flex" margin="auto" padding={2}>
        <Typography variant="h4" fontFamily="dancing script" fontWeight="bold">
          Add Your Travel Diary
        </Typography>
        <TravelExporeIcon
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

export default AddPage;

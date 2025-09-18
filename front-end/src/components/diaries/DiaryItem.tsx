import { red } from '@mui/material/colors';
import {
  Box,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { postsService } from '../../services/PostsService';

interface Props {
  id: string;
  title: string;
  description: string;
  location: string;
  image: string;
  date: string;
  user: string;
}

export default function DiaryItem({
  id,
  title,
  description,
  location,
  image,
  date,
  user,
}: Props) {
  const [open, setOpen] = useState<boolean>(false);

  const isLoggedInUser = (): boolean => {
    return localStorage.getItem('userId') === user;
  };

  const handleDelete = async (id: string) => {
    setOpen(true);
    await postsService.deletePost(id);
  };

  return (
    <Card
      sx={{
        width: '50%',
        height: '60 vh',
        margin: 1,
        padding: 1,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '5px 5px 10px #ccc',
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <EditLocationAltIcon />
          </IconButton>
        }
        title={location}
        subheader={new Date(`${date}`).toLocaleDateString()}
      />
      <img height="194" src={image} alt="Paella dish" />
      <CardContent>
        <Typography
          paddingBlock={1}
          variant="h6"
          sx={{ color: 'text.secondary' }}
        >
          {title}
        </Typography>
        <hr />
        <Box
          paddingTop={1}
          gap={4}
          display="flex"
          justifyContent="space-between"
        >
          <Typography width="170px" fontWeight="bold" variant="caption">
            Yurii Stepaniuk
          </Typography>
          <Typography
            paddingTop={1}
            variant="body2"
            sx={{ color: 'text.secondary' }}
          >
            {description}
          </Typography>
        </Box>
      </CardContent>
      {isLoggedInUser() && (
        <CardActions sx={{ marginLeft: 'auto' }}>
          <IconButton component={Link} to={`/diaries/${id}`} color="warning">
            <ModeEditOutlineIcon />
          </IconButton>
          <IconButton onClick={() => handleDelete(id)} color="error">
            <DeleteForeverIcon />
          </IconButton>
        </CardActions>
      )}

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          This is a success message
        </Alert>
      </Snackbar>
    </Card>
  );
}

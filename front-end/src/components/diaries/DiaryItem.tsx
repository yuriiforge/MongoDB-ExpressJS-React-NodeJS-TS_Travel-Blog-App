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
} from '@mui/material';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface Props {
  title: string;
  description: string;
  location: string;
  image: string;
  date: string;
  user: string;
}

export default function DiaryItem({
  title,
  description,
  location,
  image,
  date,
  user,
}: Props) {
  const isLoggedInUser = (): boolean => {
    return localStorage.getItem('userId') === user;
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
          <IconButton color="warning">
            <ModeEditOutlineIcon />
          </IconButton>
          <IconButton color="error">
            <DeleteForeverIcon />
          </IconButton>
        </CardActions>
      )}
    </Card>
  );
}

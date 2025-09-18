import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes';

const HomePage = () => {
  return (
    <Box position="relative" width="100%" height="90vh">
      <img src="/road.jpg" alt="Road" width="100%" height="70%" />
      <Typography
        fontFamily="Dancing Script, cursive"
        fontWeight="bold"
        variant="h3"
        textAlign="center"
        width="100%"
        sx={{
          position: 'absolute',
          top: '0',
          color: '#111115de',
          background: '#B2C8DF',
        }}
      >
        Dare to live the life you have always wanted
      </Typography>
      <Box width="100%" height="30%" display="flex" flexDirection="column">
        <Typography
          fontFamily="QuickSand, sans-serif"
          textAlign="center"
          variant="h4"
          padding={4}
        >
          Share Your Travel Diaries With Us
        </Typography>
        <Box margin="auto" display="flex" gap={4}>
          <Button variant="outlined">Share Your Story</Button>
          <Button component={Link} to={ROUTES.diaries} variant="contained">
            View Diaries
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;

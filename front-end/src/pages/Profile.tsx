import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { userService } from '../services/UserService';
import type { User } from '../types/User';

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUserDetails = async () => {
      const data = await userService.getUserDetails();
      setUser(data.user);
    };

    getUserDetails();
  }, []);

  const handleClick = () => {
    dispatch(authActions.logout());
    localStorage.removeItem('userId');
    navigate('/');
  };

  return (
    <Box
      display="flex"
      flexDirection={'column'}
      margin="auto"
      justifyContent="center"
      alignItems="center"
    >
      {user && (
        <>
          <Typography
            textAlign={'center'}
            variant="h3"
            fontFamily={'quicksand'}
            padding={2}
          >
            User Profile
          </Typography>
          <Typography fontFamily={'quicksand'} padding={1} textAlign="left">
            Name: {user.name}
          </Typography>
          <Typography fontFamily={'quicksand'} padding={1} textAlign="left">
            Email: {user.email}
          </Typography>
          <Button
            onClick={handleClick}
            sx={{ width: '15%' }}
            color="warning"
            variant="contained"
          >
            Logout
          </Button>
        </>
      )}
    </Box>
  );
};

export default Profile;

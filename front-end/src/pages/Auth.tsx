import { Box, Button, FormLabel, TextField, Typography } from '@mui/material';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { userService } from '../services/UserService';

export interface AuthInputs {
  name?: string;
  email: string;
  password: string;
}

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState<boolean>(false);
  const [inputs, setInputs] = useState<AuthInputs>({
    name: '',
    email: '',
    password: '',
  });

  const signOrLogin = isSignup ? 'Sign up' : 'Login';

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let data;

    if (isSignup) {
      data = await userService.authRequest(true, inputs);
    }

    data = await userService.authRequest(false, inputs);
    console.log(data);
  };

  return (
    <Box
      width="40%"
      borderRadius={10}
      boxShadow="5px 5px 10px #ccc"
      margin="auto"
      marginTop={10}
    >
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          width="60%"
          padding={5}
          margin="auto"
        >
          <Typography padding={1} variant="h4" textAlign="center">
            {signOrLogin}
          </Typography>
          {isSignup && (
            <>
              <FormLabel>Name</FormLabel>
              <TextField
                onChange={handleChange}
                value={inputs.name}
                name="name"
                margin="normal"
              />
            </>
          )}
          <FormLabel>Email</FormLabel>
          <TextField
            onChange={handleChange}
            value={inputs.email}
            name="email"
            margin="normal"
          />
          <FormLabel>Password</FormLabel>
          <TextField
            onChange={handleChange}
            value={inputs.password}
            name="password"
            type="password"
            margin="normal"
          />
          <Box
            display="flex"
            justifyContent="space-around"
            gap={2}
            marginTop={3}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{ borderRadius: 10, flex: 1 }}
            >
              {signOrLogin}
            </Button>
            <Button
              variant="outlined"
              sx={{ borderRadius: 10, flex: 1 }}
              onClick={() => setIsSignup(!isSignup)}
            >
              Change to {signOrLogin}
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default AuthPage;

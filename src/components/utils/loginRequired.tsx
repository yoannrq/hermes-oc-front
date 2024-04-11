import React from 'react';
import { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';

import AuthPage from '../../pages/AuthPage';
import { UserInterface } from '../../contexts/userContext';

import backend from '../../utils/backend';

export interface LoginRequiredProps {
  children: React.ReactNode;
}

function LoadingScreen() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '3em',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Typography
        component="h1"
        variant="h3"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
      >
        HERMES
      </Typography>
      <CircularProgress color="inherit" />
    </Box>
  );
}

export default function LoginRequired({ children }: LoginRequiredProps) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<null | UserInterface>(null);

  useEffect(() => {
    // Todo check if user have already a jwt token.

    backend.get('/api/me').then((res) => {
      console.log(res);
      if (res.ok) {
        setUser(res.data.user);
      }
      setLoading(false);
    });
    console.log('Check if jwt token is valid');
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      {user && children}
      {!loading && !user && <AuthPage onConnection={setUser} />}
    </>
  );
}

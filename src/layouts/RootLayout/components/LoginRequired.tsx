import React from 'react';
import { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';

import AuthPage from '../../../pages/AuthPage';
import { UserInterface, UserContext } from '../../../contexts/userContext';

import backend from '../../../utils/backend';

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
  const [fetchingUser, setFetchingUser] = useState(true);
  const [user, setUser] = useState<UserInterface>({
    isLogged: false,
    id: -1,
    firstname: '',
    lastname: '',
    fullname: '',
    initials: '',
    email: '',
    rppsCode: '',
    profilePictureUrl: '',
  });

  useEffect(() => {
    backend.get('/api/me').then((res) => {
      if (res.ok) {
        const user = res.data;
        setUser({
          isLogged: true,
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          fullname: user.firstname + ' ' + user.lastname,
          initials:
            user.firstname[0].toUpperCase() + user.lastname[0].toUpperCase(),
          email: user.email,
          rppsCode: user.rppsCode,
          profilePictureUrl: user.profilePictureUrl,
        });
      }
      setFetchingUser(false);
    });
  }, [fetchingUser]);

  return (
    <>
      {fetchingUser && <LoadingScreen />}

      <UserContext.Provider value={user}>
        {user.isLogged && children}
      </UserContext.Provider>

      {!fetchingUser && !user.isLogged && (
        <AuthPage onConnection={() => setFetchingUser(true)} />
      )}
    </>
  );
}

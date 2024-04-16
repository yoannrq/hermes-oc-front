import React from 'react';
import { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';

import AuthPage from '../../../pages/AuthPage';
import { UserInterface, UserContext } from '../../../contexts/userContext';

import axios from 'axios';

export interface LoginRequiredProps {
  children: React.ReactNode;
}

function LoadingScreen({ loadingState = '', isLoading = true }) {
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
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        {isLoading && <CircularProgress color="inherit" />}
        {loadingState && (
          <Typography
            fontFamily="Iter, sans-serif"
            fontStyle="italic"
            sx={{
              marginTop: '0.8em',
            }}
          >
            {loadingState}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default function LoginRequired({ children }: LoginRequiredProps) {
  const [fetchingUser, setFetchingUser] = useState(true);
  const [loadingState, setLoadingState] = useState('');
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
    if (fetchingUser) {
      tryConnect(0);
    }

    function tryConnect(delay: number) {
      const connectionStates: { [key: number]: string } = {
        500: 'Connexion en cours...',
        1500: 'La connexion prend plus de temps que prévu...',
        2500: "C'est un peu long, non ?",
      };

      if (delay in connectionStates) {
        setLoadingState(connectionStates[delay]);
      }

      console.log('tryConnect', delay, 'ms');
      setTimeout(() => {
        axios
          .get('/api/me')
          .then((res) => {
            console.log(res);
            const user = res.data;
            setUser({
              isLogged: true,
              id: user.id,
              firstname: user.firstname,
              lastname: user.lastname,
              fullname: user.firstname + ' ' + user.lastname,
              initials:
                user.firstname[0].toUpperCase() +
                user.lastname[0].toUpperCase(),
              email: user.email,
              rppsCode: user.rppsCode,
              profilePictureUrl: user.profilePictureUrl,
            });
            setFetchingUser(false);
          })
          .catch((error) => {
            console.log(error);
            if (error.response.status === 401) {
              setFetchingUser(false);
              setLoadingState('');
            } else {
              const nextDelay = delay + 500;
              if (nextDelay < 4000) {
                tryConnect(nextDelay);
              } else {
                setLoadingState(
                  'Vérifiez votre connexion internet et réessayez.'
                );
                setFetchingUser(false);
              }
            }
          });
      }, delay);
    }
  }, [fetchingUser]);

  return (
    <>
      {loadingState && (
        <LoadingScreen loadingState={loadingState} isLoading={fetchingUser} />
      )}

      {user.isLogged && (
        <UserContext.Provider value={user}>{children}</UserContext.Provider>
      )}

      {!loadingState && !user.isLogged && (
        <AuthPage onConnection={() => setFetchingUser(true)} />
      )}
    </>
  );
}

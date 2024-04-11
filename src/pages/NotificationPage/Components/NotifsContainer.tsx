import { Container, Box } from '@mui/material';

import Dashboard from './Dashboard';

import Notif from './Notif';

function NotifsContainer() {
  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        height: '100%',
        width: '95%',
        overflow: 'hidden',
      }}
    >
      <Dashboard />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'start',
          width: '100%',
          height: '100%',
          borderRadius: '5px',
          padding: '.5em .5em',
          overflowY: 'overlay',
          paddingBottom: '15vh',
        }}
      >
        <Notif />
        <Notif />
        <Notif />
        <Notif />
        <Notif />
        <Notif />
        <Notif />
        <Notif />
        <Notif />
        <Notif />
      </Box>
    </Container>
  );
}

export default NotifsContainer;

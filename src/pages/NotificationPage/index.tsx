import { Container, Box } from '@mui/material';

import Dashboard from './Components/Dashboard';
import Notif from './Components/Notif';

export default function NotificationPage() {
  return (
    <>
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
    </>
  );
}

// <Container
//   component="footer"
//   sx={{
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//   }}
// ></Container>

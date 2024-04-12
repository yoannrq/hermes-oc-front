import { Container, Box } from '@mui/material';

import Notif from './Components/Notif';

export default function NotificationPage() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'start',
          width: '100%',
          height: '100%',
          borderRadius: '5px',
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

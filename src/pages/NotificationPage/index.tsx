import { Box } from '@mui/material';

import Notif from './Components/Notif';

export default function NotificationPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        gap: '0.7em',
        padding: '0.4em 1.25em',
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
  );
}


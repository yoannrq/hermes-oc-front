import { Container } from '@mui/material';

import NotifsContainer from './Components/NotifsContainer';

export default function NotificationPage() {
  return (
    <>
      <NotifsContainer />
      <Container
        component="footer"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      ></Container>
    </>
  );
}

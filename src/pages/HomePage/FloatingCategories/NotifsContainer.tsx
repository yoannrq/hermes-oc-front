import { Container } from '@mui/material';
// import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

import Notif from './Notif';

function NotifsContainer() {
  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        // padding: '1em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        height: '100%',
        width: '90%',
      }}
    >
      <Notif />
    </Container>
  );
}

export default NotifsContainer;

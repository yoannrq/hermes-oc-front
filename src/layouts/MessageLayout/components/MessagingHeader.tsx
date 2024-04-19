import { ArrowBackIosNewRounded, Diversity3Rounded } from '@mui/icons-material';
import { Button, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function MessagingHeader() {
  const navigateTo = useNavigate();

  return (
    <Container
      component="header"
      maxWidth="lg"
      sx={{
        marginTop: '.5em',
        marginBottom: '.5em',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        gap: '1em',
      }}
    >
      <Button
        href="#"
        // variant="contained"
        sx={{
          padding: '.5em',
          minWidth: 0,
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
        }}
      >
        <ArrowBackIosNewRounded onClick={() => navigateTo('/nav/private')} />
      </Button>
      <Button
        href="#"
        // variant="contained"
        sx={{
          padding: '.5em',
          minWidth: 0,
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
        }}
      >
        <Diversity3Rounded />
      </Button>
      <Typography variant="h6">Nom du groupe</Typography>
      {/*//* À dynamiser plus tard en fonction du groupe */}
    </Container>
  );
}

export default MessagingHeader;


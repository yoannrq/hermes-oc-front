import Header from '../LoginPage/Header/Header';
import Footer from '../LoginPage/Footer/Footer';
import NameFirstname from './components/NameFirstname';
import MailField from './components/MailField';
import PasswordFields from './components/PasswordFields';
import RppsField from './components/RppsField';
import SubmitButton from './components/SubmitButton';
import ConnectLink from './components/ConnectLink';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function SignUpForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      rpps: data.get('rpps'),
    });
  };

  return (
    <>
      <Container
        component="main"
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <Header />

        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            marginBottom: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{
              marginBottom: 5,
            }}
          >
            Créer un compte
          </Typography>

          <Box
            component="form"
            noValidate
            sx={{
              mt: 3,
            }}
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              <NameFirstname />

              <MailField />

              <RppsField />

              <PasswordFields />
            </Grid>

            <SubmitButton />

            <ConnectLink />
          </Box>
        </Box>

        <Footer />
        
      </Container>
    </>
  );
}

export default SignUpForm;

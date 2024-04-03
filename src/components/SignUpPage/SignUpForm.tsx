import Header from '../LoginPage/Header/Header';
import Footer from '../LoginPage/Footer/Footer';
import './SignUpForm.scss';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
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
        
        <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField autoComplete="given-name" name="firstName" required fullWidth id="firstName" label="Prénom" autoFocus />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth id="lastName" label="Nom" name="lastName" autoComplete="family-name" />
            </Grid>
            <Grid item xs={12}>
              <TextField required type="email" fullWidth id="email" label="Email" name="email" autoComplete="email" />
            </Grid>
            <Grid item xs={12}>
              <TextField autoComplete="given-name" name="rpps" required fullWidth id="rpps" label="Numéro RPPS" autoFocus />
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth name="password" label="Mot de passe" type="password" id="password" autoComplete="new-password" />
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth name="confirm-password" label="Confirmez le mot de passe" type="password" id="confirm-password" autoComplete="new-password" />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Créer
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Vous avez déjà un compte? Connectez-vous
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Footer />
    </Container>
  );
}

export default SignUpForm;

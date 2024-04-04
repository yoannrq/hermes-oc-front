import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import CustomLink from '../../../components/CustomLink';
import Field from '../../../components/CustomField';
import CustomButton from '../../../components/CustomButton';

function SignUpForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  }
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
          // onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Field
                type="text"
                autoComplete="fname"
                name="firstName"
                id="firstName"
                label="Prénom"
                required
                fullWidth
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                type="text"
                autoComplete="lname"
                name="lastName"
                id="lastName"
                label="Nom"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                type="email"
                autoComplete="email"
                name="email"
                id="email"
                label="Adresse mail"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                type="text"
                name="rpps"
                id="rpps"
                label="Numero RPPS"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                type="password"
                autoComplete="new-password"
                name="password"
                id="password"
                label="Mot de passe"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                type="password"
                autoComplete="new-password"
                name="password"
                id="password"
                label="Mot de passe"
                required
                fullWidth
              />
            </Grid>
          </Grid>

          <Grid sx={{ mt: 3 }}>
            <CustomButton
              type="submit"
              variant="contained"
              fullWidth
              text="Créer"
              onClick={handleSubmit}
            />
          </Grid>

          <Grid sx={{ mt: 2, display: 'flex', justifyContent: 'end' }}>
            <CustomLink
              href="#"
              variant="body2"
              text="Vous avez déjà un compte? Connectez-vous"
            />
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default SignUpForm;

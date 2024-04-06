// import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import backend from './../../../utils/backend.ts';
import { fieldsConfig } from './FormFields.ts';

export interface SignUpFromProps {
  onRequireLogin: () => void;
}

function SignUpForm({ onRequireLogin }: SignUpFromProps) {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form).entries()); // Utilise l'élément formulaire pour créer le FormData

    delete data.confirmPassword;
    console.log('Send this data to backend ', data);

    const res = await backend.post('/api/auth/signup', data);

    console.log('Le serveur à répondu avec une réponse : ', res.status);

    if (res.ok) {
      // L'utilisateur est crée
      // TODO feed back user compte bien crée !
      console.log("L'utilisateur à bien été crée : ", res.data);

      onRequireLogin();
    } else {
      // Feed back user à propos de toutes ces erreurs.
      console.log('Les erreurs suivantes sont apparues :');
      if (res.data.error.errors) {
        res.data.error.errors.forEach((error: any) => {
          const fieldName = error.path[0];
          const message = error.message;

          console.log(
            `Le champ {${fieldName}} [${message.code}] : ${message.value}\nVoir plus: `,
            error
          );
        });
      }
    }
  }

  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
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
        <Typography component="h1" variant="h6">
          Créez un compte
        </Typography>

        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{
            mt: 3,
          }}
        >
          <Grid container spacing={2}>
            {fieldsConfig.map((field, index) => (
              <Grid
                item
                key={index}
                xs={field.gridSizes?.xs}
                sm={field.gridSizes?.sm}
              >
                <TextField
                  type={field.type}
                  autoComplete={field.autoComplete}
                  name={field.name}
                  label={field.label}
                  id={field.id}
                  required={field.required}
                  fullWidth={field.fullWidth}
                  autoFocus={field.autoFocus}
                />
              </Grid>
            ))}
          </Grid>

          <Grid sx={{ mt: 3 }}>
            <Button type="submit" variant="contained" fullWidth>
              Céer
            </Button>
          </Grid>

          <Grid sx={{ mt: 2, display: 'flex', justifyContent: 'end' }}>
            <Link href="#" variant="body2" onClick={onRequireLogin}>
              Vous avez déjà un compte?
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default SignUpForm;

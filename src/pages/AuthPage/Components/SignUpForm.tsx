import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Link,
  Snackbar,
  Box,
} from '@mui/material';

import { useState } from 'react';
import axios from 'axios';
import PasswordField from './../../../components/PasswordField.tsx';

export interface SignUpFromProps {
  onRequireLogin: () => void;
}

function SignUpForm({ onRequireLogin }: SignUpFromProps) {
  const [errorMessage, setErrorMessage] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  let formDataIsValid = true;
  const passwordMatch = password === confirmPassword;

  if (
    !firstname ||
    !lastname ||
    !email ||
    !password ||
    !confirmPassword ||
    !passwordMatch
  ) {
    formDataIsValid = false;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    axios
      .post('/api/auth/signup', {
        firstname,
        lastname,
        email,
        password,
      })
      .then(() => {
        onRequireLogin();
      })
      .catch((err) => {
        if (err.response.status === 500) {
          setErrorMessage(
            'Une erreur est survenue lors de la création du compte.'
          );
        } else {
          const errorsByFieldName: { [key: string]: string[] } = {};

          if (err.response.data.error.errors) {
            interface Error {
              path: string[];
              message: { value: string };
            }

            err.response.data.error.errors.map((error: Error) => {
              const fieldName = error.path[0]; // "password" | "email" | ...
              const errorMessage = error.message.value as string;

              const fieldErrors = errorsByFieldName[fieldName] || [];

              fieldErrors.push(
                errorMessage.replace(`The field '${fieldName}'`, '')
              );
              errorsByFieldName[fieldName] = fieldErrors;
            });

            let recapError = '';

            for (const fieldName of Object.keys(errorsByFieldName)) {
              const fieldErros = errorsByFieldName[fieldName];
              recapError += `The field '${fieldName}' contains : ${
                fieldErros.length
              } error${fieldErros.length > 1 ? 's' : ''}.`;

              fieldErros.forEach((msg) => {
                recapError += `\n\t${msg}`;
              });

              recapError += '\n\n';
            }

            setErrorMessage(recapError);
          }
        }
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
        <Typography component="h1" variant="h6" fontSize="1em">
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
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                autoComplete="fname"
                name="firstname"
                label="Prénom"
                id="firstname"
                required={true}
                fullWidth={true}
                autoFocus={true}
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                autoComplete="lname"
                name="lastname"
                label="Nom"
                id="lastname"
                required={true}
                fullWidth={true}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                autoComplete="email"
                name="email"
                label="Adresse mail"
                id="email"
                required={true}
                fullWidth={true}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Grid>
            {/* //* RPPS code is not required for v1 */}
            {/* <Grid item xs={12} >
                <TextField type='text' name='rpssCode' label='Numero RPPS' id='rppsCode' required={true} fullWidth={true}
                  onChange={(e) => {setRpss(e.target.value)}}
                />
              </Grid> */}
            <Grid item xs={12}>
              <PasswordField
                variant="outlined"
                name="password"
                label="Mot de passe"
                id="password"
                required={true}
                fullWidth={true}
                onChange={(value) => {
                  setPassword(value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <PasswordField
                variant="outlined"
                name="confirmPassword"
                label="Confirmez le mot de passe"
                id="confirmPassword"
                required={true}
                fullWidth={true}
                onChange={(value) => {
                  setConfirmPassword(value);
                }}
              />
              {!passwordMatch && (
                <Typography textAlign="left" sx={{ my: '0.4em' }}>
                  Les mots de passes doivent être identiques.
                </Typography>
              )}
            </Grid>
          </Grid>

          <Grid sx={{ mt: 3 }}>
            <Button
              disabled={!formDataIsValid}
              type="submit"
              variant="contained"
              fullWidth
            >
              Céer
            </Button>
          </Grid>

          <Snackbar
            sx={{
              height: 'auto',
              lineHeight: '28px',
              padding: 24,
              whiteSpace: 'pre-wrap',
            }}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={errorMessage !== ''}
            autoHideDuration={6000}
            onClose={() => setErrorMessage('')}
            message={errorMessage}
            action={
              <Button
                color="secondary"
                size="small"
                onClick={() => setErrorMessage('')}
              >
                Fermer
              </Button>
            }
          />

          <Grid sx={{ mt: 2, display: 'flex', justifyContent: 'end' }}>
            <Link href="#" variant="body2" onClick={() => onRequireLogin()}>
              Vous avez déjà un compte?
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default SignUpForm;

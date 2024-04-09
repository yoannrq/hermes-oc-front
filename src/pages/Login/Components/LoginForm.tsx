import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Box,
  Link,
  Snackbar,
} from '@mui/material';
import { useState } from 'react';

import { UserInterface } from '../../../contexts/userContext.tsx';
import backend from '../../../utils/backend.ts';
import PasswordField from '../../../components/PasswordField.tsx';

export interface LoginFormProps {
  onRequireSignUp: () => void;
  onConnection: (user: UserInterface) => void;
}

function LoginForm({ onRequireSignUp, onConnection }: LoginFormProps) {
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let formDataIsValid = true;

  if (!email || !password) {
    formDataIsValid = false;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // const form = event.target as HTMLFormElement;
    // const data = Object.fromEntries(new FormData(form).entries()); //// Utilise l'élément formulaire pour créer le FormData

    // console.log('Send this data to backend : ', data);
    const res = await backend.post('/api/auth/login', {
      email,
      password,
    });

    // console.log('Le serveur à répondu avec une réponse : ', res.status, res);

    if (res.ok) {
      // User loggin
      onConnection(res.data as UserInterface);
    } else {
      // Todo feed back error
      if (res.data.error.errors) {
        const errorsByFieldName: { [key: string]: string[] } = {};

        interface Error {
          path: string[];
          message: { value: string };
        }

        res.data.error.errors.map((error: Error) => {
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

        // console.log('Les erreurs suivantes sont apparues :');
        // if (res.data.error.errors) {
        //   res.data.error.errors.forEach((error: any) => {
        //     const fieldName = error.path[0];
        //     const message = error.message;

        //     console.log(
        //       `Le champ {${fieldName}} [${message.code}] : ${message.value}\nVoir plus: `,
        //       error
        //     );
        //   });
        // }
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
          Entrez vos informations de connexion
        </Typography>

        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{
            mt: 3,
          }}
        >
          <TextField
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            required={true}
            fullWidth={true}
            autoFocus={true}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />

          <PasswordField
            id="password"
            name="password"
            variant="outlined"
            label="Mot de passe"
            required={true}
            fullWidth={true}
            onChange={(value) => setPassword(value)}
          />

          <Grid sx={{ mt: 3 }}>
            <Button
              disabled={!formDataIsValid}
              type="submit"
              variant="contained"
              fullWidth
            >
              Connexion
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

          <Grid
            sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}
          >
            <Link href="#" variant="body2">
              Mot de passe oublié?
            </Link>

            <Link href="#" variant="body2" onClick={onRequireSignUp}>
              Créer un compte
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginForm;

import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Box,
  Link,
} from '@mui/material';

import { UserInterface } from '../../../contexts/userContext.tsx';
import backend from '../../../utils/backend.ts';
import PasswordField from '../../../components/PasswordField.tsx';

export interface LoginFormProps {
  onRequireSignUp: () => void;
  onConnection: (user: UserInterface) => void;
}

function LoginForm({ onRequireSignUp, onConnection }: LoginFormProps) {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form).entries()); // Utilise l'élément formulaire pour créer le FormData

    console.log('Send this data to backend : ', data);
    const res = await backend.post('/api/auth/login', data);

    console.log('Le serveur à répondu avec une réponse : ', res.status, res);

    if (res.ok) {
      // User loggin
      onConnection(res.data as UserInterface);
    } else {
      // Todo feed back error

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
          Entrez vos informations de connexion
        </Typography>

        <Box
          component="form"
          noValidate
          sx={{
            mt: 3,
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            sx={{ mb: 2 }}
          />

          <PasswordField
            id="password"
            name="password"
            variant="outlined"
            label="Mot de passe"
            required={true}
            fullWidth={true}
          />

          <Grid sx={{ mt: 3 }}>
            <Button type="submit" variant="contained" fullWidth>
              Connexion
            </Button>
          </Grid>

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

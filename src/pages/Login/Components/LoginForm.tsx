import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from '@mui/material';
import { UserInterface } from '../../../contexts/userContext.tsx';

import backend from '../../../utils/backend.ts';

import { fieldsConfig } from './FormFields.ts';

export interface LoginFormProps {
  onRequireSignUp: () => void,
  onConnection: (user: UserInterface) => void,
}

function LoginForm({ onRequireSignUp, onConnection }: LoginFormProps) {

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form).entries()); // Utilise l'élément formulaire pour créer le FormData

    console.log("Send this data to backend : ", data)
    const res = await backend.post("/api/auth/login", data)

    console.log("Le serveur à répondu avec une réponse : ", res.status, res)

    if (res.ok){
      // User loggin
      onConnection(res.data)
    } else {
      // Todo feed back error

      console.log("Les erreurs suivantes sont apparues :")
      if (res.data.error.errors){
        res.data.error.errors.forEach(error => {
          const fieldName = error.path[0]
          const message = error.message

          console.log(`Le champ {${fieldName}} [${message.code}] : ${message.value}\nVoir plus: `, error)
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
        // height: '100%',
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
          <Grid container spacing={2}>
            {fieldsConfig.map((field, index) => (
              <Grid
                item
                key={index}
                xs={field.gridSizes?.xs}
                // sm={field.gridSizes?.sm}
              >
                <TextField
                  type={field.type}
                  autoComplete={field.autoComplete}
                  name={field.name}
                  id={field.id}
                  label={field.label}
                  required={field.required}
                  fullWidth={field.fullWidth}
                  autoFocus={field.autoFocus}
                />
              </Grid>
            ))}
          </Grid>

          <Grid sx={{ mt: 3 }}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
            >
              Connexion
            </Button>
          </Grid>

          <Grid
            sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}
          >
            <Link
              href="#"
              variant="body2"
            >
              Mot de passe oublié?
            </Link>
            <Link
              href="#"
              variant="body2"
              onClick={onRequireSignUp}
            >
              Créer un compte
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginForm;

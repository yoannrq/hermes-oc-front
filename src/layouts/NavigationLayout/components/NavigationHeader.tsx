import { Box, TextField, Typography, Container, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useUserContext } from '../../../contexts/userContext';
import { useTheme } from '@mui/material/styles';

import UserIcon from '../../../components/UserIcon';

const titles: { [key: string]: string } = {
  '/nav/home': 'Accueil',
  '/nav/patients': 'Patients',
  '/nav/teams': 'Équipes',
  '/nav/private': 'Conversations',
};

export default function NavigationHeader() {
  const location = useLocation();
  const user = useUserContext();
  const theme = useTheme();

  let title = 'Accueil';

  if (location.pathname !== '/nav') {
    title =
      Object.entries(titles)?.find(([key, _]) =>
        location.pathname.startsWith(key)
      )?.[1] || 'Accueil';
  }

  return (
    <Container
      component="header"
      maxWidth="lg"
      sx={{
        marginTop: '1em',
        marginBottom: '0.5em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          marginBottom: '0.313em',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          width: '100%',
        }}
      >
        <Typography variant="h5">{title}</Typography>

        <Button
          href="#"
          sx={{
            padding: '.5em',
            minWidth: 0,
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
          }}
        >
          <UserIcon user={user} />
          {/*//* À dynamiser plus tard en fonction du user */}
        </Button>
      </Box>

      <TextField
        sx={{
          margin: '0.2em 0.2em 0',
          width: '100%',
          backgroundColor: theme.palette.grey[100],
          borderRadius: '10',
        }}
        type="search"
        id="outlined-search"
        label="Rechercher..."
        variant="outlined"
        size="small"
      />
    </Container>
  );
}

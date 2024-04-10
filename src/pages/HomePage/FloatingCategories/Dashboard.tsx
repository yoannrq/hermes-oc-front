import { Box, Typography } from '@mui/material';

function Dashboard() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '95%',
        height: '10em',
        bgcolor: '#e5e5e5e5',
        borderRadius: '5px',
        padding: '1em .5em',
        margin: ".5em 0",
      }}
    >
      <Typography
        variant="h6"
        sx={{ width: '100%', textAlign: 'left', fontWeight: '600' }}
      >
        3 Notifications non lues {/*//* À dynamiser en fonction des notifs reçues */}
      </Typography>

      <Typography
        variant="h6"
        sx={{ width: '100%', textAlign: 'left', fontWeight: '600' }}
      >
        2 Favoris {/*//* À dynamiser en fonction des notifs reçues */}
      </Typography>

      <Typography
        variant="h6"
        sx={{ width: '100%', textAlign: 'left', fontWeight: '600' }}
      >
        4 Tâches à faire {/*//* À dynamiser en fonction des notifs reçues */}
      </Typography>
    </Box>
  );
}

export default Dashboard;

import { Box, Typography } from '@mui/material';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

function Notif() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        width: '95%',
        bgcolor: '#e5e5e5e5',
        borderRadius: '5px',
        padding: '1em 0.5em',
        marginBottom: '0.5em',
      }}
    >
      <MessageOutlinedIcon //* À dynamiser en fonction du type de notif reçue
        sx={{ fontSize: '2rem', marginRight: '0.5em', color: '#686868' }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '70%',
        }}
      >
        <Typography
          variant="h6"
          sx={{ width: '100%', textAlign: 'left', fontWeight: '600' }}
        >
          Notifications {/*//* À dynamiser en fonction des notifs reçues */}
        </Typography>
        <Typography
          sx={{
            width: '100%',
            textAlign: 'left',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni minima
          fugit fuga facere debitis ad excepturi quas qui, quam praesentium
          repudiandae sit, quae reiciendis, officia saepe deserunt illo?
          Temporibus, nobis!{' '}
          {/*//* À dynamiser en fonction des notifs reçues */}
        </Typography>
      </Box>
      <Typography
        sx={{
          width: '100%',
          height: '100%',
        }}
      >
        8:00{' '}
        {/*//* À dynamiser en fonction de l'heure de réception de la notif */}
      </Typography>
    </Box>
  );
}

export default Notif;

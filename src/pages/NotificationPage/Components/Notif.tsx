import { Box, Typography } from '@mui/material';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

function Notif() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '0.7em',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        width: '100%',
        bgcolor: '#e5e5e5e5',
        borderRadius: '13px',
        padding: '0.55em 0.75em',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          backgroundColor: (t) => t.palette.background.paper,
          borderRadius: '50%',
          height: '2.5em',
          width: '2.5em',
          minWidth: '2.5em',
          minHeight: '2.5em',
        }}
      >
        <MessageOutlinedIcon //* À dynamiser en fonction du type de notif reçue
          sx={{
            position: 'relative',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '1.3em',
            color: '#686868',
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: '0',
          width: '100%',
        }}
      >
        <Typography
          variant="h2"
          fontWeight="600"
          fontSize="1em"
          sx={{
            textAlign: 'left',
            width: '100%',
          }}
        >
          Notifications {/*//* À dynamiser en fonction des notifs reçues */}
        </Typography>
        <Typography
          sx={{
            width: '100%',
            textAlign: 'left',
            fontSize: '0.75em',
            fontWeight: '700',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {Date.now() % 2 === 0 && "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam possimus suscipit necessitatibus minima numquam consequatur molestiae tenetur corporis nulla illo, reprehenderit iste enim libero cupiditate quos perspiciatis eveniet tempore sapiente."}
          
          {/*//* À dynamiser en fonction des notifs reçues */}
        </Typography>
      </Box>
      <Typography
        fontWeight="800"
        fontFamily="Iter-Bold, sans-serif"
        color={(t) => t.palette.text.secondary}
        sx={{
          flexBasis: 0,
          width: '100%',
          height: '100%',
        }}
      >
        8:00
        {/*//* À dynamiser en fonction de l'heure de réception de la notif */}
      </Typography>
    </Box>
  );
}

export default Notif;


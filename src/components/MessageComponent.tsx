import { Box, AvatarGroup, Avatar, Typography } from '@mui/material';

import AvatarComponent from './AvatarComponent';
import MessageBubble from './MessageBubble';

function MessageComponent() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '.5em',
        paddingBottom: '.5em',
        paddingTop: '.5em',
      }}
    >
      <AvatarComponent />
      <MessageBubble />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'end',
          position: 'relative',
        }}
      >
        <Typography variant="caption" sx={{ fontSize: '.7em'}}>15 pers.</Typography> {/*//* À dynamiser en fonction du nombre de personnes aillant lu le message */}
        <Box
          sx={{
            display: 'flex',
            height: '1.5em',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'end',
              height: '100%',
              width: '100%',
            }}
          >
            <AvatarComponent
              src="https://mui.com/static/images/avatar/3.jpg"
              sx={{
                border: '2px solid white',
                position: 'absolute',
                width: '1em',
                height: '1em',
                zIndex: 3,
              }}
            />
            <AvatarComponent
              src="https://mui.com/static/images/avatar/2.jpg"
              sx={{
                border: '2px solid white',
                position: 'absolute',
                width: '1em',
                height: '1em',
                left: 8,
                zIndex: 2,
              }}
            />
            <AvatarComponent
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{
                border: '2px solid white',
                position: 'absolute',
                width: '1em',
                height: '1em',
                left: 16,
                zIndex: 1,
              }}
            />
            {/* <AvatarGroup
              max={4}
              spacing="small"
              sx={{
                '.MuiAvatar-root': {
                  // Sélecteur pour cibler tous les avatars enfants
                  width: '1em', // Largeur de chaque avatar
                  height: '1em', // Hauteur de chaque avatar
                },
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/3.jpg"
              />
              <Avatar
                alt="Travis Howard"
                src="https://mui.com/static/images/avatar/2.jpg"
              />
              <Avatar
                alt="Cindy Baker"
                src="https://mui.com/static/images/avatar/1.jpg"
              />
              <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
              <Avatar
                alt="Trevor Henderson"
                src="/static/images/avatar/5.jpg"
              />
            </AvatarGroup> */}
          </Box>
          <Box sx={{ height: '100%', display: 'flex', justifyContent: "end", alignItems: 'end' }}>
            <Typography variant="caption" sx={{ padding: 0, margin: 0, lineHeight: '1em' }}>
              ...
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MessageComponent;

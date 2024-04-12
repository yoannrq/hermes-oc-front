import { Box, Typography } from '@mui/material';

import AvatarComponent from './AvatarComponent';

function AvatarGroup() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end',
        width: '100%',
      }}
    >
      <Typography variant="caption" sx={{ fontSize: '.7em' }}>
        15 pers.
      </Typography>{' '}
      {/*//* À dynamiser en fonction du nombre de personnes aillant lu le message */}
      <Box
        sx={{
          display: 'flex',
          height: '1.5em',
          width: '100%',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            display: 'inline-block', 
            alignSelf: 'flex-end',
            minWidth: '2.5em',
            height: '100%',
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
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'end',
            height: '100%',
            width: '100%',
          }}
        >
          <Typography
            variant="caption"
            sx={{ padding: 0, margin: 0, lineHeight: '1em' }}
          >
            ...
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default AvatarGroup;

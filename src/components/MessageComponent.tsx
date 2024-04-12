import { Box } from '@mui/material';

import AvatarComponent from './AvatarComponent';
import MessageBubble from './MessageBubble';
import AvatarGroup from './AvatarGroup';

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
      <AvatarComponent src="https://mui.com/static/images/avatar/3.jpg"/>
      <MessageBubble />
      <AvatarGroup />
    </Box>  
  );
}

export default MessageComponent;

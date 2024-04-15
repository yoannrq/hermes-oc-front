import { Box } from '@mui/material';

import { useUserContext } from '../../../contexts/userContext';
import AvatarComponent from '../../../components/AvatarComponent';
import MessageBubble from './MessageBubble';
import AvatarGroup from './AvatarGroup';

export interface MessageComponentProps {
  message: {
    id: string,
    conversationId: number,
    authorId: number,
    content: string,
    date: string,
    deleted: boolean,
  }
  style: object,
}

function MessageComponent({ message }: MessageComponentProps) {
  const user = useUserContext()

  const isAuthorMessage = user.id === message.authorId

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '.5em',
        padding: '0.5em 0em',
        alignSelf: isAuthorMessage ? 'flex-end' : 'flex-start'
      }}
    >
      {!isAuthorMessage && 
        <AvatarComponent src="https://mui.com/static/images/avatar/3.jpg"/>

      }
      <MessageBubble message={message} />
      {/* <AvatarGroup /> */}
    </Box>  
  );
}

export default MessageComponent;

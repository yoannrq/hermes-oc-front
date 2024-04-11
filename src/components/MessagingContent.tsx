import { Container, Box } from '@mui/material';

import MessageComponent from './MessageComponent';
import MessageBubble from './MessageBubble';

function MessagingContent() {
  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflowY: 'auto',
      }}
    >
      <MessageComponent />
      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        <MessageBubble />
      </Box>
      <MessageComponent />
      <MessageComponent />
      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        <MessageBubble />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        <MessageBubble />
      </Box>
      <MessageComponent />
      <MessageComponent />
      <MessageComponent />
      <MessageComponent />
      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        <MessageBubble />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        <MessageBubble />
      </Box>
      <MessageComponent />
      <MessageComponent />
      <MessageComponent />
      <MessageComponent />
      <MessageComponent />
      <MessageComponent />
      <MessageComponent />
      <MessageComponent />
      <MessageComponent />
    </Container>
  );
}

export default MessagingContent;

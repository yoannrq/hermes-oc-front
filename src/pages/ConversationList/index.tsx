import { Box } from '@mui/material';

import ConversationItem from './components/ConversationItem';
import { data } from './data';

function ConversastionList() {
  return (
    <Box sx={{ 
      overflowY: 'auto', 
      padding: '0.4em 1.25em', 
      display: 'flex',
      flexDirection: 'column',
      gap: '0.95em',
      }}>
      {data.map((conversation) => (
        <ConversationItem
          key={conversation.conversationid}
          user={conversation.receiver}
          title={`${conversation.receiver.firstname} ${conversation.receiver.lastname}`}
          content={conversation.lastMessage.content}
          unreadMessagesCount={conversation.unreadMessagesCount}
          date={conversation.lastMessage.date}
        />
      ))}
    </Box>
  );
}

export default ConversastionList;


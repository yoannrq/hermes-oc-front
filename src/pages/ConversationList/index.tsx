import { Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';

import ConversationItem from './components/ConversationItem';

function ConversastionList() {
  const navigate = useNavigate();
  const { data, error, loading } = useFetch({
    key: ['conversations', 'all'],
    url: '/api/me/privates',
    method: 'get',
    cache: {
      enabled: false,
    },
  });

  if (loading) {
    return <h1>Loading ...</h1>;
  }
  if (error) {
    return <h1>error ...</h1>;
  }

  return (
    <Container
      component="main"
      className="TEST"
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        padding: 0,
        margin: 'auto',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'start',
          width: '100%',
          height: '100%',
          overflowY: 'auto',
          gap: '0.7em',
          padding: '0.4em 1.25em',
        }}
      >
        {data.map((conversation) => {
          const { privateId, receiver, unreadMessagesCount, lastMessage } =
            conversation;

          return (
            lastMessage && (
              <ConversationItem
                key={privateId}
                onClick={() => {
                  navigate(`/conversations/private/${privateId}`);
                }}
                user={receiver}
                title={`${receiver.firstname} ${receiver.lastname}`}
                content={lastMessage.content}
                unreadMessagesCount={unreadMessagesCount}
                date={lastMessage.date}
              />
            )
          );
        })}
      </Box>
    </Container>
  );
}

export default ConversastionList;

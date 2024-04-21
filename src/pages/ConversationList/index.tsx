import { Typography } from '@mui/material';
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
    return (
      <Typography
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
        }}
      >
        Loading ...
      </Typography>
    );
  }
  if (error) {
    return (
      <Typography
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
        }}
      >
        error ...
      </Typography>
    );
  }

  return (
    <>
      {data.map((conversation: any) => {
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
      {data.map((conversation: any) => {
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
      {data.map((conversation: any) => {
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
    </>
  );
}

export default ConversastionList;

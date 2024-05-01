import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';

import ConversationItem from '../ConversationList/components/ConversationItem';

function TeamsList() {
  const navigate = useNavigate();
  const { data, error, loading } = useFetch({
    key: ['teams', 'list'],
    url: '/api/me/teams',
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
      {data.map((team: any) => {
        const {
          id,
          name,
          unreadMessagesCount,
          lastMessage,
        } = team;

        return (
          <ConversationItem
            key={id}
            onClick={() => {
              navigate(`/conversations/team/${id}`);
            }}
            title={name}
            content={lastMessage ? lastMessage.content : ''}
            unreadMessagesCount={unreadMessagesCount}
            date={lastMessage ? lastMessage.date : ''}
          />
        );
      })}
    </>
  );
}

export default TeamsList;

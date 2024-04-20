import { Box, Container, Typography } from '@mui/material';
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
    console.log(data),
    (
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
          {data.map((team) => {
            const {
              id,
              name,
              // profilePictureUrl,
              unreadMessagesCount,
              lastMessage,
            } = team;

            return (
              lastMessage && (
                <ConversationItem
                  key={id}
                  onClick={() => {
                    navigate(`/conversations/team/${id}`);
                  }}
                  // user={profilePictureUrl}
                  title={name}
                  content={lastMessage.content}
                  unreadMessagesCount={unreadMessagesCount}
                  date={lastMessage.date}
                />
              )
            );
          })}

          {/* <h1>Liste des équipes</h1> */}
        </Box>
      </Container>
    )
  );
}

export default TeamsList;

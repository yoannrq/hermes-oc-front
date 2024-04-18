import { Box, Container } from '@mui/material';
import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';

import ConversationItem, {
  ConversationProps,
} from './components/ConversationItem';

import axios from 'axios';
// import ConversationItem from './components/ConversationItem';
// import { data } from './data';

function ConversastionList() {
  const navigate = useNavigate();
  const { data, error, loading } = useFetch({
    key: ['conversations', 'list'],
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
    // <Box sx={{
    //   overflowY: 'auto',
    //   padding: '0.4em 1.25em',
    //   display: 'flex',
    //   flexDirection: 'column',
    //   gap: '0.95em',
    //   bgcolor: '#f0f'
    //   }}>

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
        // margin: 0,
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
        {data?.map((conversation) => {
          const {
            privateConversationid,
            receiver,
            totalMessage,
            unreadMessageCount,
            lastMessage,
          } = conversation;

          return (
            lastMessage && (
              <ConversationItem
                key={privateConversationid}
                onClick={() => {
                  navigate(`/conversations/private/${privateConversationid}`);
                }}
                user={receiver}
                title={`${receiver.firstname} ${receiver.lastname}`}
                content={lastMessage.content}
                unreadMessagesCount={unreadMessageCount}
                date={lastMessage.date}
              />
            )
          );
        })}
      </Box>
    </Container>
    // </Box>
  );
}

export default ConversastionList;

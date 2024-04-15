import { Container } from '@mui/material';
import { useLoaderData } from 'react-router-dom';

import { useState, useEffect, useRef } from 'react';

import MessageComponent from './components/MessageComponent';

function Messaging() {
  const [messages, setMessages] = useState([]);
  const res = useLoaderData();
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (res && res.ok) {
      setMessages(res.data.messages);
    }
  }, [res, res.ok]);

  // Auto scroll to the bottom
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.scrollTop = container.scrollHeight;
    }

    //! idée pour envoyer un message
    //   setTimeout(() => {
    //     setMessages([
    //       ...messages,
    //       {
    //         id: 'testid' + Date.now(),
    //         content: 'Bonjour à tous je suis un faux message',
    //         authorId: 13,
    //         date: "djT20:30",
    //         deleted: false,
    //       },
    //     ]);
    //   }, 10000);
  });

  if (!res.ok) {
    console.error(res);
    return <h1>Fetch error !</h1>;
  }

  return (
    <>
      <Container
        component="main"
        maxWidth="lg"
        ref={(ref) => (containerRef.current = ref)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          overflowY: ' auto',
        }}
      >
        {messages.map((message) => {
          return (
            <MessageComponent
              key={message.id}
              message={message}
            />
          );
        })}
      </Container>
    </>
  );
}

export default Messaging;

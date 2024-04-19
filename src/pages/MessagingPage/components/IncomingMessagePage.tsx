import { Button, Container } from '@mui/material';
import { useState } from 'react';

import useSocketEvent from '../../../hooks/useSocketEvent';

import MessageComponent from './MessageComponent';

interface MessagePageProps {
  roomId: number;
  roomType: string;
}

export default function MessagePage({ roomId, roomType }: MessagePageProps) {
  const [messages, setMessages] = useState([]);

  useSocketEvent('newMessage', handleNewMessage);
  useSocketEvent('updatedMessage', handleUpdatedMessage);

  function handleNewMessage(data: any) {
    setMessages((oldMessages) => [...oldMessages, data.message]);
  }

  function handleUpdatedMessage(data: any) {
    const updatedMessage = data.updatedMessage;
    setMessages((messages) =>
      messages.map((message) => {
        if (updatedMessage.id === message.id) {
          return updatedMessage;
        }
        return message;
      })
    );
  }

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {messages.map((message: any) => {
        console.log(message);
        return <MessageComponent key={message.id} message={message} />;
      })}
    </Container>
  );
}

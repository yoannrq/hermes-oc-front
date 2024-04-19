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
  // useSocketEvent('deletedMessage', handleDeletedMessage);

  function handleNewMessage(data: any) {
    console.log(data);
    setMessages((oldMessages) => [...oldMessages, data.message]);
  }

  function handleUpdatedMessage(data: any) {
    const updatedMessage = data.updatedMessage;
    console.log('updated message: ', data.updatedMessage);
    setMessages((oldMessages) => {
      return oldMessages.map((message) => {
        if (updatedMessage.id === message.id) {
          return updatedMessage;
        }
        return message;
      });
    });
  }

  // function handleDeletedMessage(data: any) {}

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

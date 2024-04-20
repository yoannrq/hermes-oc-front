import { Button, Container } from '@mui/material';
import { useState } from 'react';

import useSocketEvent from '../../../hooks/useSocketEvent';

import MessageComponent from './MessageComponent';
import { MessageInterface } from './MessageBubble';

interface MessagePageProps {
  roomId: number;
  roomType: string;
}

export default function MessagePage({ roomId, roomType }: MessagePageProps) {
  const [messages, setMessages] = useState([] as MessageInterface[]);

  useSocketEvent('newMessage', handleNewMessage);
  useSocketEvent('updatedMessage', handleUpdatedMessage);
  useSocketEvent('deletedMessage', handleDeletedMessage);

  function handleNewMessage(data: any) {
    setMessages((oldMessages) => [...oldMessages, data.message]);
  }

  function handleUpdatedMessage(data: any) {
    const updatedMessage = data.updatedMessage;
    setMessages((oldMessages) => {
      return oldMessages.map((message) => {
        if (updatedMessage.id === message.id) {
          return updatedMessage;
        }
        return message;
      });
    });
  }

  function handleDeletedMessage(data: any) {
    console.log('deleted message: ', data.deletedMessage);
    const deletedMessage = data.deletedMessage;
    setMessages((oldMessages) => {
      return oldMessages.map((message) => {
        if (message.id === deletedMessage.id) {
          return deletedMessage;
        }
        return message;
      });
    });
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

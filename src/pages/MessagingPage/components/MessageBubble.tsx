import { Typography, Box, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

export interface MessageBubbleProps {
  message: {
    id: string;
    conversationId: number;
    authorId: number;
    content: string;
    date: string;
    deleted: boolean;
  };
  style?: object;
  isEditing?: boolean;
  onClick?: () => void;
  updateMessageContent: (content: string) => void;
}

function MessageBubble({
  message,
  style,
  isEditing,
  onClick,
  updateMessageContent,
}: MessageBubbleProps) {
  // const date = new Date(message.date);

  // // Change this date parsing logic with moment.js
  // const start = message.date.search(/T/g) + 1
  // const time = message.date.substring(start, start + 5)

  const [messageTime, setMessageTime] = useState('');

  useEffect(() => {
    const storedTime = localStorage.getItem(`messageTime_${message.id}`);
    if (storedTime) {
      setMessageTime(storedTime);
    } else {
      const date = new Date(message.date);
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const time = `${hours}:${minutes}`;
      setMessageTime(time);
      localStorage.setItem(`messageTime_${message.id}`, time);
    }
  }, [message.date, message.id]);

  return (
    <Box
      sx={{
        bgcolor: '#98c7ff',
        minWidth: '5em',
        maxWidth: '65vw',
        borderRadius: '10px',
        padding: '.5em 1em',
        ...style,
      }}
      onClick={onClick}
    >
      {isEditing ? (
        <TextField
        id="standard-multiline-static"
        defaultValue={message.content}
        onChange={(e) => updateMessageContent(e.target.value)}
        multiline
        autoFocus
        variant="standard"
        sx={{ border: 0, wordWrap: 'break-word'}}
        />
      ) : (
        <Typography
          variant="body1"
          sx={{
            paddingBottom: '.5em',
            fontSize: '1em',
            wordWrap: 'break-word',
            whiteSpace: 'break-spaces',
          }}
        >
          {message.content}
        </Typography>
      )}
      <Typography
        variant="body1"
        sx={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'end',
          fontSize: '0.67em',
        }}
      >
        {messageTime}
      </Typography>
    </Box>
  );
}

export default MessageBubble;

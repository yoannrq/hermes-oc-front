import { Typography, Box } from '@mui/material';

export interface MessageBubbleProps {
  message: {
    id: string;
    conversationId: number;
    authorId: number;
    content: string;
    date: string;
    deleted: boolean;
  };
}

function MessageBubble({ message }: MessageBubbleProps) {
  const date = new Date(message.date);

  // Change this date parsing logic with moment.js 
  const start = message.date.search(/T/g) + 1
  const time = message.date.substring(start, start + 5)

  return (
    <Box
      sx={{
        bgcolor: '#98c7ff',
        minWidth: '5em',
        maxWidth: '65vw',
        borderRadius: '10px',
        padding: '.5em 1em',
      }}
    >
      <Typography 
        variant="body1" 
        sx={{
           paddingBottom: '.5em',
           fontSize: '1em',
        }}
        >
        {message.content}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'end',
          fontSize: '0.67em',
        }}
      >
        {time}
      </Typography>
    </Box>
  );
}

export default MessageBubble;

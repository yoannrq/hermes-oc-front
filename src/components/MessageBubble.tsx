import { Typography, Box } from '@mui/material';

export interface MessageBubbleProps {
  content: string;
  time: string;
}

function MessageBubble({ content, time }: MessageBubbleProps) {
  return (
    <Box
      sx={{
        bgcolor: '#98c7ff',
        minWidth: '5em',
        maxWidth: '16em',
        borderRadius: '10px',
        padding: '.5em 1em',
      }}
    >
      <Typography variant="body1" sx={{ paddingBottom: '.5em' }}>
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam pariatur quibusdam, natus quasi facere harum nobis sapiente corporis, ipsam, ut dolorum quisquam veniam animi ea nam quod asperiores voluptatum assumenda. */}

        {content}

      </Typography>
      <Typography
        variant="body1"
        sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}
      >
        {/* 8:30 //* À dynamiser en fonction de l'heure de l'envoi */}

        {time}

      </Typography>
    </Box>
  );
}

export default MessageBubble;



// Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam pariatur quibusdam, natus quasi facere harum nobis sapiente corporis, ipsam, ut dolorum quisquam veniam animi ea nam quod asperiores voluptatum assumenda.


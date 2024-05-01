import { Typography, Box, TextField } from '@mui/material';
import { useUserContext } from '../../../contexts/userContext';

export interface MessageInterface {
  id: string;
  conversationId: number;
  authorId: number;
  content: string;
  deleted: boolean;
  date: string;
  updatedAt: string | null;
}

export interface MessageBubbleProps {
  message: MessageInterface;
  editedContent?: string;
  isEditing?: boolean;
  onEditedContentChanged?: (newContent: string) => void;
}

function MessageBubble({
  message,
  isEditing,
  editedContent,
  onEditedContentChanged,
}: MessageBubbleProps) {
  const user = useUserContext();

  const isAuthorMessage = user.id === message.authorId;

  const isUpdated = message.updatedAt !== null;
  const date = new Date(message.date);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const time = `${hours}:${minutes}`;

  if (message.deleted) {
    return (
      <Typography
        sx={{
          border: '1px solid #ccc',
          borderRadius: '0.6em',
          padding: '0.3em',
          fontStyle: 'italic',
          fontSize: '0.8em',
          color: '#aaa',
        }}
      >
        Message supprimé.
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        bgcolor: '#98c7ff',
        minWidth: '5em',
        maxWidth: '65vw',
        borderRadius: '0.6em',
        padding: '.5em 1em',
        cursor: isAuthorMessage ? 'pointer' : 'default',
      }}
    >
      {isEditing && (
        <TextField
          id="standard-multiline-static"
          multiline
          autoFocus
          variant="standard"
          sx={{ border: 0, wordWrap: 'break-word' }}
          value={editedContent}
          onChange={(e) => {
            if (onEditedContentChanged) onEditedContentChanged(e.target.value);
          }}
        />
      )}
      {!isEditing && (
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
        {isUpdated && (
          <Typography
            variant="body1"
            sx={{
              color: (theme) => theme.palette.text.secondary,
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'end',
              fontSize: '1em',
              marginRight: '.5em',
            }}
          >
            (Modifé)
          </Typography>
        )}
        {time}
      </Typography>
    </Box>
  );
}

export default MessageBubble;

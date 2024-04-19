import { Box, TextField, Container, Button } from '@mui/material';
import { Send } from '@mui/icons-material';
import { FormEvent, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function MessagingTextArea() {
  const [inputValue, setInputValue] = useState('');
  const { roomId, roomType } = useParams() as { [key: string]: string };

  function sendMessage() {
    axios
      .post('/api/me/messages', {
        roomType,
        roomId: parseInt(roomId, 10),
        content: inputValue,
      })
      .then((_) => {
        console.log('Message envoyé avec succès au backend !');
        setInputValue('');
      })
      .catch((error) => {
        console.error(
          "Erreur lors de l'envoi du message au backend (else):",
          error.response.status
        );
      });
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.ctrlKey && e.key === 'Enter') {
      sendMessage();
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <Container
      className="textarea"
      maxWidth="lg"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1em',
        marginTop: '.5em',
        marginBottom: '.5em',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'end',
          gap: '1em',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-multiline-flexible"
          label="Message ..."
          multiline
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          maxRows={4}
          sx={{
            width: '100%',
            flexGrow: 1,
          }}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{ flexShrink: 0, height: '4em', boxShadow: 'none' }}
        >
          <Send />
        </Button>
      </Box>
    </Container>
  );
}

export default MessagingTextArea;

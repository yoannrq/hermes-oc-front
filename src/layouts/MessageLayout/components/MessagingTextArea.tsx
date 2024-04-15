import { Box, TextField, Container, Button } from '@mui/material';
import { Send } from '@mui/icons-material';
import { FormEvent, useState } from 'react';

function MessagingTextArea() {

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // const newMessage = {
    //   content: inputValue,
    // };

    // console.log(newMessage);
    
    // setInputValue('');


    const newMessage = {
      roomType: "conversation",
      roomId: 1,
      content: inputValue,
    };

    console.log(newMessage);

    try {
      const response = await fetch('/api/me/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMessage),
      });

      if (response.ok) {
        console.log('Message envoyé avec succès au backend !');
        
        setInputValue('');
      } else {
        console.error("Erreur lors de l'envoi du message au backend (else):", response.status);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du message au backend (catch) :", error);
    }
  };
  

  return (
    <Container
      // component="footer"
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
          maxRows={4}
          sx={{
            width: '100%',
            flexGrow: 1,
          }}
        />
        <Button variant="contained" type='submit' sx={{ flexShrink: 0, height: '4em', boxShadow: "none" }}>
          <Send />
        </Button>
      </Box>
    </Container>
  );
}

export default MessagingTextArea;



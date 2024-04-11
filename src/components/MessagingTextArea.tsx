import { Box, TextField, Container, Button } from '@mui/material';
import { Send } from '@mui/icons-material';

function MessagingTextArea() {
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
          maxRows={4}
          sx={{
            width: '100%',
            flexGrow: 1,
          }}
        />
        <Button variant="contained" sx={{ flexShrink: 0, height: '4em', boxShadow: "none" }}>
          {<Send />}
        </Button>
      </Box>
    </Container>
  );
}

export default MessagingTextArea;

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

function MailField() {
  return (
    <Grid item xs={12}>
      <TextField
        autoComplete="email"
        name="email"
        id="email"
        label="Adresse mail"
        variant="outlined"
        required
        fullWidth
        autoFocus
      />
    </Grid>
  );
}

export default MailField;

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

function PasswordFields() {
  return (
    <>
      <Grid item xs={12}>
        <TextField
          autoComplete="new-password"
          type="password"
          name="password"
          id="password"
          label="Mot de passe"
          required
          fullWidth
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          autoComplete="new-password"
          name="confirm-password"
          id="confirm-password"
          label="Confirmez le mot de passe"
          type="password"
          required
          fullWidth
        />
      </Grid>
    </>
  );
}

export default PasswordFields;

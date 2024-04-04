import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


function RppsField() {
  return (
    <Grid item xs={12}>
      <TextField
        autoComplete="given-name"
        name="rpps"
        id="rpps"
        label="Numéro RPPS"
        required
        fullWidth
        autoFocus
      />
    </Grid>
  );
}

export default RppsField;

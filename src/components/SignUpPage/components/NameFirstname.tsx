import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

function NameFirstname() {
  return (
    <>
      <Grid item xs={12} sm={6}>
        <TextField
          autoComplete="fname"
          name="firstName"
          id="firstName"
          label="Prénom"
          required
          fullWidth
          autoFocus
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          autoComplete="lname"
          name="lastName"
          id="lastName"
          label="Nom"
          required
          fullWidth
        />
      </Grid>
    </>
  );
}

export default NameFirstname;

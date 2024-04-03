import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

const Form = () => {
  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '40ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="input">
          <TextField id="outlined-basic" label="Identifiant" />
        </div>

        <div className="input">
          <TextField id="outlined-password-input" label="Mot de passe" type="password" />
        </div>
      </Box>

      <Box sx={{ '& button': { m: 4 } }}>
        <div>
          <Button variant="contained">Connexion</Button>
        </div>
      </Box>
      <Grid container sx={{display: "flex", justifyContent: "space-around", width: '40ch'}}>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            Don't have an account? Sign Up
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Form;

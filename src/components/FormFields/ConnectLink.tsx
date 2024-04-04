import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

function ConnectLink() {
  return (
    <Grid container justifyContent="flex-end">
      <Grid item>
        <Link href="#" variant="body1">
          Vous avez déjà un compte? Connectez-vous
        </Link>
      </Grid>
    </Grid>
  );
}

export default ConnectLink;

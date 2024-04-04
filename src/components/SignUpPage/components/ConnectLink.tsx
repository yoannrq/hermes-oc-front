import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

function ConnectLink() {
  return (
    <Grid container justifyContent="flex-end">
      <Grid item>
        <Link href="#" variant="body2">
          Vous avez déjà un compte? Connectez-vous
        </Link>
      </Grid>
    </Grid>
  );
}

export default ConnectLink;

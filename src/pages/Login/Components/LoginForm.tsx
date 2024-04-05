import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from '@mui/material';

import CustomButton from '../../../components/CustomButton';
import Field from '../../../components/CustomField';
import { fieldsConfig } from './FormFields.ts';
import { linksConfig } from './FormFields.ts';

function LoginForm() {
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  //};
  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // height: '100%',
      }}
    >
      <Box
        sx={{
          marginTop: 5,
          marginBottom: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          component="h1"
          variant="h6"
        >
          Entrez vos informations de connexion
        </Typography>

        <Box
          component="form"
          noValidate
          sx={{
            mt: 3,
          }}
          // onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            {fieldsConfig.map((field, index) => (
              <Grid
                item
                key={index}
                xs={field.gridSizes?.xs}
                sm={field.gridSizes?.sm}
              >
                <Field
                  type={field.type}
                  autoComplete={field.autoComplete}
                  name={field.name}
                  id={field.id}
                  label={field.label}
                  required={field.required}
                  fullWidth={field.fullWidth}
                  autoFocus={field.autoFocus}
                />
              </Grid>
            ))}
          </Grid>

          <Grid sx={{ mt: 3 }}>
            <CustomButton
              type="submit"
              variant="contained"
              fullWidth
              text="Connexion"
              // onClick={handleSubmit}
            />
          </Grid>

          <Grid sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
            {linksConfig.map((link, index) => (
              <Link key={index} href={link.href} variant={link.variant}>
                {link.text}
              </Link>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginForm;

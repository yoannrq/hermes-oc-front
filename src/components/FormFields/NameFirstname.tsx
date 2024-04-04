import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';

interface NameProps {
  type?: string;
  autoComplete?: string;
  name?: string;
  id?: string;
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  autoFocus?: boolean;
}

function Field({
  type,
  autoComplete,
  name,
  id,
  label,
  required,
  fullWidth,
  autoFocus,
}: NameProps) {
  return (
    <TextField
      type={type}
      autoComplete={autoComplete}
      name={name}
      id={id}
      label={label}
      required={required}
      fullWidth={fullWidth}
      autoFocus={autoFocus}
    />
  );
}

export default Field;

// <>
//   <Grid item xs={12} sm={6}>
//     <TextField
//       autoComplete="fname"
//       name="firstName"
//       id="firstName"
//       label="Prénom"
//       required
//       fullWidth
//       autoFocus
//     />
//   </Grid>
//   <Grid item xs={12} sm={6}>
//     <TextField
//       autoComplete="lname"
//       name="lastName"
//       id="lastName"
//       label="Nom"
//       required
//       fullWidth
//     />
//   </Grid>
// </>

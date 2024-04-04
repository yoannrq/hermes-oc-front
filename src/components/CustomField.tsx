import TextField from '@mui/material/TextField';

interface FieldProps {
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
}: FieldProps) {
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
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';

interface PasswordFieldProps {
  variant: 'standard' | 'outlined' | 'filled',
  id: string,
  name: string,
  label: string,
  required: boolean,
  fullWidth: boolean,
  onChange?: (value: string) => void,
}

function PasswordField ({variant, label, required, fullWidth, onChange}:PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <TextField
            variant={variant}
            type={showPassword ? 'text' : 'password'}
            label={label}
            required={required}
            fullWidth={fullWidth}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}

          />
  )
}

export default PasswordField;
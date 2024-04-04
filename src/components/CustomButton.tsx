import Button, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

type AllowedVariants = 'text' | 'outlined' | 'contained';
type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  type?: ButtonType;
  variant?: AllowedVariants;
  fullWidth?: boolean;
  text: string;
  onClick?: () => void;
}

function CustomButton({ variant, fullWidth, text, onClick }: ButtonProps) {
  return (
    <Button variant={variant} fullWidth={fullWidth} onClick={onClick} >
      {text}
    </Button>
  );
}

export default CustomButton;
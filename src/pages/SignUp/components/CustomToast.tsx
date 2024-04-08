import { Snackbar, Button } from '@mui/material';

interface CustomToastProps {
  open: boolean,
  message: string,
  onClose: () => void,
}

function CustomToast({ open, message, onClose }: CustomToastProps) {
  return (
    <Snackbar
      sx={{ height: 'auto', lineHeight: '28px', padding: 24, whiteSpace: 'pre-wrap' }}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      message={message}
      action={
        <Button color="secondary" size="small" onClick={onClose}>
          Fermer
        </Button>
      }
    />
  );
}

export default CustomToast;
import { Box, Typography } from '@mui/material';

function Header() {
  return (
    <Box
      className="header"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.5em',
        color: '#000000',
      }}
    >
      <Typography
        component="h1"
        variant="h3"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
      >
        HERMES
      </Typography>
    </Box>
  );
}

export default Header;

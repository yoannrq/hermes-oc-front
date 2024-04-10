import { Avatar, Box, TextField, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box
    maxWidth="md"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '1em',
      width: '90%',
    }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          width: '100%',
        }}
      >
        <Typography variant="h5">
          Accueil
          {/* À dynamiser plus tard en fonction de la catégorie selectionnée */}
        </Typography>

        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </Box>

      <TextField
        sx={{ margin: '1em', width: '100%' }}
        type="search"
        id="outlined-search"
        label="Rechercher..."
        variant="outlined"
      />
    </Box>
  );
};

export default Header;

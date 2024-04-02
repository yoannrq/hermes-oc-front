// import React from 'react'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Header.scss';

const Header = () => {
  return (
    <div className="header" style={{width: '100%'}}>
      <div className="up">
        <h1>Nom catégorie</h1> {/* à dynamiser en fonction de la catégorie selectionnée*/}
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </div>

      <div className="search-bar">
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-search" label="Rechercher..." type="search" variant="outlined" />
        </Box>
      </div>
    </div>
  );
};

export default Header;

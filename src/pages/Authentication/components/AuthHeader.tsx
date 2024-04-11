import React from 'react';
import { Box, Typography } from '@mui/material'
import './Header.scss';


export default function AuthHeader() {

  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1.5em",
      color: "#000000",
    }}>
      <Typography component='h1'>HERMES</Typography>
    </Box>
  )
};

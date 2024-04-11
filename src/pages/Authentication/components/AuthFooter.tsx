import React from 'react';
import { 
  Box,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@mui/material'

import './Footer.scss';

export default function AuthFooter() {

  return (
    <Box className="footer">
      <List>
      {["Baptiste", "Jérôme", "Yoann", "Laurent", "Yoan"].map(name => (
        <ListItem>
          <ListItemText>{name}</ListItemText>
        </ListItem>
      ))}
      </List>
      <p>© 2021. All rights reserved.</p>
    </Box>
  );
};

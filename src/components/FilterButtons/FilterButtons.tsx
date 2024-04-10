import { useState } from 'react';
import { Box, Container, Fab } from '@mui/material';

function FilterButtons() {
  const items=['Notifs', 'Favoris', 'Tâches'];

  const [activeIdx, setActiveIdx] = useState<number>(-1);

  const handleButtonClick = (idx: number) => {
    setActiveIdx(idx);
  };

  return (
    <Container
      component="footer"
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >

    <Box
      sx={{
        margin: '1em',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 2,
      }}
      >
      {items.map((item, idx) => (
        <Fab
          key={idx}
          variant="extended"
          size={idx === activeIdx ? 'medium' : 'small'}
          color={idx === activeIdx ? 'primary' : 'default'}
          onClick={() => handleButtonClick(idx)}
          sx={{
            padding: '0.5em 1em',
            transition: 'background-color 0.5s', 
          }}
          >
          {item}
        </Fab>
      ))}
    </Box>
      </Container>
  );
}

export default FilterButtons;
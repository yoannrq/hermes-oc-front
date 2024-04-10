import { useState } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

function FilterButtons() {
  const items=['Notifs', 'Favoris', 'Tâches'];

  const [activeIdx, setActiveIdx] = useState<number>(-1);

  const handleButtonClick = (idx: number) => {
    setActiveIdx(idx);
  };

  return (
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
  );
}

export default FilterButtons;
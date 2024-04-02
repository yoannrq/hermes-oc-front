import './FilterButtons.scss';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
/*import NavigationIcon from '@mui/icons-material/Navigation';*/

const FilterButton = () => {
  return (
  
    <Box sx={{ '& > :not(style)': { m: 1} }}>
      <Fab variant="extended" size="small" color="primary" sx={{ p: 2 }}>
        Notifs
      </Fab>
      <Fab variant="extended" size="small" color="primary" sx={{ p: 2 }}>
        Favoris
      </Fab>
      <Fab variant="extended" size="small" color="primary" sx={{ p: 2 }}>
        Tâches
      </Fab>
    </Box>
   
  );
}

export default FilterButton;
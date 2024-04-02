// import './FilterButtons.scss';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
/*import NavigationIcon from '@mui/icons-material/Navigation';*/


type FilterButtonsProps = {
  items: string[],
  activeIdx: number,
  onClick (idx: number): void,
};


function FilterButtons({ items, activeIdx, onClick }: FilterButtonsProps) {

  return (
    <Box sx={{
       '& > :not(style)': { m: 1}, 
      }}>
        {items.map((item, idx) => {
          const isActive = idx == activeIdx

          return (
            <Fab 
              variant="extended"
              size="small" 
              color={isActive ? "primary" : "secondary"}
              key={idx}
              onClick={() => onClick(idx)}
              sx={{
                p: 1.5, 
                paddingX: isActive ? "2.2em" : "0.9em",
                paddingY: "0.1em"  
              }}>
                {item}
            </Fab>
            )
          }
        )}
    </Box>
   
  );
}

export default FilterButtons;

      // <Fab variant="extended" size="small" color="primary" 
      //   sx={{
      //     p: 1.5, 
      //     padding: "0.3em"  
      //   }}>
      //   Notifs
      // </Fab>
      // <Fab variant="extended" size="small" color="primary" sx={{ p: 1.5, height: 2 }}>
      //   Favoris
      // </Fab>
      // <Fab variant="extended" size="small" color="primary" sx={{ p: 1.5, height: 2 }}>
      //   Tâches
      // </Fab>
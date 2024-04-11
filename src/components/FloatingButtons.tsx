import { useTheme } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { Box, Container, Fab } from '@mui/material';

const items = [
  { name: 'Notifs', path: 'notifications' },
  { name: 'Favoris', path: 'bookmarks' },
  { name: 'Tâches', path: 'tasks' },
];

export default function FilterButtons() {
  const theme = useTheme();

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
            component={NavLink}
            to={item.path}
            size="small"
            color="default"
            style={({ isActive }) => ({
              backgroundColor: isActive
                ? theme.palette.primary.main
                : theme.palette.default,
            })}
            sx={{
              padding: '0.5em 1em',
              transition: 'background-color 0.5s',
            }}
          >
            {item.name}
          </Fab>
        ))}
      </Box>
    </Container>
  );
}

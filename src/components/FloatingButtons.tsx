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
      component="nav"
      maxWidth="md"
      sx={{
        padding: 0,
        position: 'relative',
        transform: 'translateY(-100%)',
        bottom: '0.73em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '0.73em',
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
            // @ts-ignore
            style={({ isActive }: { isActive: any }) => ({
              textTransform: 'none',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.95em',
              padding: isActive ? '1.2em 1.7em' : '0.5em 0.9em',
              transition: 'padding 0.3s',
              backgroundColor: theme.palette.background.default,
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

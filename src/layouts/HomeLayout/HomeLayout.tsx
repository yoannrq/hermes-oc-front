import { Outlet } from 'react-router-dom';

import { Box, Container } from '@mui/material';

import FilterButtons from '../../components/FloatingButtons';

export default function HomeLayout() {
  return (
    <>
      <Box
        sx={{
          display: 'block',
          position: 'relative',
          height: 0,
          width: '100%',
          flexGrow: 1,
        }}
      >
        <Container
          component="main"
          className="TEST"
          maxWidth="lg"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            padding: 0,
            margin: 0,
            overflow: 'hidden',
          }}
        >
          <Outlet />
        </Container>
        <FilterButtons />
      </Box>
    </>
  );
}


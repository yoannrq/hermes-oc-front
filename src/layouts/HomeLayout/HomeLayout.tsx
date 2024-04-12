import { Outlet, useLocation, useOutletContext } from 'react-router-dom';

import { Box, Container } from '@mui/material';

import FilterButtons from '../../components/FloatingButtons';

export default function HomeLayout() {
  const location = useLocation();

  console.log('location : ', location);
  console.log('outletContext: ', useOutletContext());
  return (
    <>
      <Box
        sx={{
          display: 'block',
          position: 'relative',
          height: 0,
          flexGrow: 1,
        }}
      >
        <Container
          component="main"
          maxWidth="lg"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center',
            height: '100%',
            width: '95%',
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

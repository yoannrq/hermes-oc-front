import { useRef } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from '@mui/material';

import ShadowContainer from '../../components/ShadowContainer';
import Navbar from './components/Navbar';
import Header from './components/NavigationHeader';

export default function NavigationLayout() {
  const scrollContainerRef = useRef<HTMLElement>(null);

  return (
    <>
      <ShadowContainer
        scrollContainerRef={scrollContainerRef}
        direction="bottom"
      >
        <Header />
      </ShadowContainer>

      <Container
        component="main"
        maxWidth="lg"
        ref={scrollContainerRef}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'center',
          overflowY: 'auto',
          height: '100%',
          width: '100%',
          padding: '0.4em 1.25em',
          margin: 'auto',
        }}
      >
        <Outlet />
      </Container>

      <ShadowContainer scrollContainerRef={scrollContainerRef} direction="top">
        <Navbar />
      </ShadowContainer>
    </>
  );
}

import { Outlet } from 'react-router-dom';
import { useRef } from 'react';

import { Container } from '@mui/material';

import ShadowContainer from '../../components/ShadowContainer';
import MessagingHeader from './components/MessagingHeader';
import MessagingTextArea from './components/MessagingTextArea';

export type ContextType = {
  scrollContainerRef: React.RefObject<HTMLElement | null>;
};

export default function NavigationLayout() {
  const scrollContainerRef = useRef<HTMLElement>(null);

  return (
    <>
      <ShadowContainer
        scrollContainerRef={scrollContainerRef}
        direction="bottom"
      >
        <MessagingHeader />
      </ShadowContainer>
      <Container
        component="main"
        maxWidth="lg"
        ref={scrollContainerRef}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          overflowY: ' auto',
        }}
      >
        <Outlet context={{ scrollContainerRef } satisfies ContextType} />
      </Container>

      <ShadowContainer scrollContainerRef={scrollContainerRef} direction="top">
        <MessagingTextArea />
      </ShadowContainer>
    </>
  );
}

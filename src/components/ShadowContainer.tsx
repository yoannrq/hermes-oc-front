import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import { useSpring, animated } from '@react-spring/web';

type directionType = 'top' | 'bottom';

interface ShadowContainerProps {
  scrollContainerRef: React.RefObject<HTMLElement | null>;
  children: React.ReactNode;
  direction: directionType;
}

const AnimatedBox = animated(Box);

export default function ShadowContainer({
  scrollContainerRef,
  direction = 'bottom',
  children,
}: ShadowContainerProps) {
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current?.addEventListener('scroll', handleScroll);
      return () => {
        scrollContainerRef.current?.removeEventListener('scroll', handleScroll);
      };
    }
  }, [scrollContainerRef, scrollContainerRef?.current]);

  const [props, api] = useSpring(() => ({
    from: {
      displayShadow: 0,
    },
  }));

  function handleScroll(e: Event) {
    const container = e.target as HTMLElement;

    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight;
    const clientHeight = container.clientHeight;

    const nextCanScrollBottom = scrollHeight - (scrollTop + clientHeight) > 1;
    const nextCanScrollTop = scrollTop > 0;

    const nextDisplayShadow =
      direction === 'bottom' ? nextCanScrollTop : nextCanScrollBottom;

    api.start({
      displayShadow: nextDisplayShadow ? 1 : 0,
    });
  }

  return (
    <AnimatedBox
      //
      style={{
        boxShadow: props.displayShadow.to(
          (v) =>
            `0px ${direction === 'bottom' ? '-' : ''}4px ${10 * v}px 0px rgba(0,0,0, ${11.0 * v})`
        ),
      }}
    >
      {children}
    </AnimatedBox>
  );
}

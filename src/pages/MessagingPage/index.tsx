import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import { useCache } from '../../contexts/cacheContext';
import useSocketRoom from '../../hooks/useSocketRoom';

import MessagePage from './components/MessagePage';
import IncomingMessagePage from './components/IncomingMessagePage';

const ONE_HOUR = 3600;

function Messaging() {
  const { roomId, roomType } = useParams() as { [key: string]: string };
  console.log(roomId, roomType);
  useSocketRoom('message', { roomId: parseInt(roomId, 10), roomType });
  const [scrollIsRestored, setScrollIsRestored] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [previousScrollHeight, setPreviousScrollHeight] = useState(0);

  const containerRef = useRef<HTMLElement | null>(null);
  const [pageCount, setPageCount] = useState(1);
  const { getCache, keyify } = useCache();

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;

      const scrollHeight = container.scrollHeight;
      const nextScrollPosition =
        scrollPosition + scrollHeight - previousScrollHeight;

      container.scrollTop = nextScrollPosition;
      setScrollPosition(nextScrollPosition);
      setPreviousScrollHeight(containerRef?.current?.scrollHeight || 0);
      setScrollIsRestored(true);
    }
  }, [
    scrollIsRestored,
    previousScrollHeight,
    containerRef?.current?.scrollHeight,
  ]);

  const { originTimestamp, pageSize, ttl } = getCache(
    keyify(['messages', 'cacheInfo', roomType, roomId]),
    {
      pageSize: 5,
      originTimestamp: Date.now(),
      ttl: ONE_HOUR,
    },
    ONE_HOUR
  );

  function handleScroll(e: React.UIEvent<HTMLElement>) {
    const { scrollTop } = e.target as HTMLElement;
    setScrollPosition(scrollTop);
  }

  function fetchOneMorePage() {
    if (scrollIsRestored) {
      setPageCount(pageCount + 1);
    }
  }

  function handleSuccessfulLoadData() {
    if (scrollIsRestored) {
      setScrollIsRestored(false);
      setPreviousScrollHeight(containerRef.current?.scrollHeight || 0);
    }
  }

  const messagePages = [];
  for (let i = pageCount; i > 0; i--) {
    messagePages.push(
      <MessagePage
        key={`${roomType}-${roomId}-older-${i}`}
        roomType={roomType}
        roomId={parseInt(roomId, 10)}
        page={i}
        pageSize={pageSize}
        ttl={ttl}
        originTimestamp={originTimestamp}
        onRequireMorePages={i === pageCount ? fetchOneMorePage : undefined}
        onSuccessfulLoadData={handleSuccessfulLoadData}
        timelineDirection="older"
      />
    );
  }

  messagePages.push(
    <MessagePage
      key={`${roomType}-${roomId}-newer-${1}`}
      roomType={roomType}
      roomId={parseInt(roomId, 10)}
      page={1}
      pageSize={500000}
      ttl={ttl}
      originTimestamp={originTimestamp}
      timelineDirection="newer"
    />
  );

  messagePages.push(
    <IncomingMessagePage key={`${roomType}-${roomId}-incoming`} />
  );

  return (
    <Container
      component="main"
      maxWidth="lg"
      ref={containerRef}
      onScroll={handleScroll}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflowY: ' auto',
      }}
    >
      {messagePages}
    </Container>
  );
}

export default Messaging;


import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import { useCache } from '../../contexts/cacheContext';
import useSocketRoom from '../../hooks/useSocketRoom';

import MessagePage from './components/MessagePage';
import IncomingMessagePage from './components/IncomingMessagePage'

const ONE_HOUR = 3600;

function Messaging() {
  const { roomId, roomType } = useParams() as { [key: string]: string };
  useSocketRoom('message', { roomId: parseInt(roomId, 10), roomType });

  const containerRef = useRef<HTMLElement | null>(null);
  const [pageCount, setPageCount] = useState(1);
  const { getCache, keyify } = useCache();

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.scrollTop = container.scrollHeight;
    }
  });

  const { originTimestamp, pageSize, ttl } = getCache(
    keyify(['messages', 'cacheInfo', roomType, roomId]),
    {
      pageSize: 5,
      originTimestamp: Date.now(),
      ttl: ONE_HOUR,
    },
    ONE_HOUR
  );

  function fetchOneMorePage() {
    setPageCount(pageCount + 1);
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
        onRequireMorePages={fetchOneMorePage}
        showFetchMore={i === pageCount}
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
      onRequireMorePages={fetchOneMorePage}
      showFetchMore={false}
      timelineDirection="newer"
    />
  )

  
  messagePages.push(<IncomingMessagePage key={`${roomType}-${roomId}-incoming`} roomId={parseInt(roomId, 10)} roomType={roomType} />)

  return (
    <Container
      component="main"
      maxWidth="lg"
      ref={(ref) => (containerRef.current = ref)}
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

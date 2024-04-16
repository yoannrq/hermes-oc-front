import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import { useCache } from '../../contexts/cacheContext';
import MessagePage from './components/MessagePage';

const ONE_HOUR = 3600;

function Messaging() {
  const { roomId, roomType } = useParams() as { [key: string]: string };

  const containerRef = useRef<HTMLElement | null>(null);
  const [pageCount, setPageCount] = useState({
    [`${roomType}-${roomId}`]: 1,
  });
  const currentPageCount = pageCount[`${roomType}-${roomId}`] || 1;
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
      pageSize: 2,
      originTimestamp: Date.now(),
      ttl: ONE_HOUR,
    },
    ONE_HOUR
  );

  function fetchOneMorePage() {
    setPageCount({
      ...pageCount,
      [`${roomType}-${roomId}`]: currentPageCount + 1,
    });
  }

  const messagePages = [];
  for (let i = currentPageCount; i > 0; i--) {
    messagePages.push(
      <MessagePage
        key={`${roomType}-${roomId}-${i}`}
        roomType={roomType}
        roomId={parseInt(roomId, 10)}
        page={i}
        pageSize={pageSize}
        ttl={ttl}
        originTimestamp={originTimestamp}
        onRequireMorePages={fetchOneMorePage}
        isLastDisplayedPage={i === currentPageCount}
      />
    );
  }

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

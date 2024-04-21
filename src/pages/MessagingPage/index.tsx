import { useParams, useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { useCache } from '../../contexts/cacheContext';
import useSocketRoom from '../../hooks/useSocketRoom';
import { ContextType } from '../../layouts/MessageLayout/MessageLayout';

import MessagePage from './components/MessagePage';
import IncomingMessagePage from './components/IncomingMessagePage';

const ONE_HOUR = 3600;

function Messaging() {
  const { roomId, roomType } = useParams() as { [key: string]: string };
  useSocketRoom('message', { roomId: parseInt(roomId, 10), roomType });

  const { scrollContainerRef } = useOutletContext<ContextType>();
  const [scrollIsRestored, setScrollIsRestored] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [previousScrollHeight, setPreviousScrollHeight] = useState(0);

  const [pageCount, setPageCount] = useState(1);
  const { getCache, keyify } = useCache();

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current?.addEventListener('scroll', handleScroll);
      return () => {
        scrollContainerRef.current?.removeEventListener('scroll', handleScroll);
      };
    }
  }, [scrollContainerRef, scrollContainerRef?.current]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;

      const nextScrollPosition =
        scrollPosition +
        scrollContainerRef.current.scrollHeight -
        previousScrollHeight;

      container.scrollTop = nextScrollPosition;
      setScrollPosition(nextScrollPosition);
      setPreviousScrollHeight(scrollContainerRef?.current?.scrollHeight || 0);
      setScrollIsRestored(true);
    }
  }, [
    scrollIsRestored,
    previousScrollHeight,
    scrollContainerRef?.current?.scrollHeight,
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

  function handleScroll(e: Event) {
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
      setPreviousScrollHeight(scrollContainerRef.current?.scrollHeight || 0);
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

  return <>{messagePages}</>;
}

export default Messaging;

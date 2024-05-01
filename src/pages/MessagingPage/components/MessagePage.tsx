import { useEffect } from 'react';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import { Container } from '@mui/material';

import MessageComponent from './MessageComponent';
import useFetch from '../../../hooks/useFetch';
import useSocketEvent from '../../../hooks/useSocketEvent';

interface MessagePageProps {
  roomId: number;
  roomType: string;
  page: number;
  pageSize: number;
  timelineDirection: string;
  ttl: number;
  originTimestamp: number;
  onRequireMorePages?: () => void;
  onSuccessfulLoadData?: () => void;
}

export default function MessagePage({
  roomId,
  roomType,
  page,
  pageSize,
  timelineDirection,
  originTimestamp,
  ttl,
  onRequireMorePages,
  onSuccessfulLoadData,
}: MessagePageProps) {
  useSocketEvent('updatedMessage', handleUpdatedMessage);
  useSocketEvent('deletedMessage', handleDeletedMessage);

  const { loading, error, data, setData } = useFetch({
    key: [
      'messages',
      roomType,
      roomId,
      timelineDirection,
      page,
      pageSize,
      originTimestamp,
    ],
    url: `/api/me/messages/${roomType}/${roomId}`,
    params: {
      page,
      pageSize,
      originTimestamp,
      timelineDirection,
    },
    method: 'get',
    cache: {
      enabled: timelineDirection === 'older',
      ttl,
    },

    onSuccess: () => {
      if (onSuccessfulLoadData) {
        onSuccessfulLoadData();
      }
    },

    onCacheHit: () => {
      if (onSuccessfulLoadData) {
        onSuccessfulLoadData();
      }
    },
  });

  const [pageRef, entry] = useIntersectionObserver({
    threshold: 0.5,
  });
  const pageIsVisible = entry?.isIntersecting;

  useEffect(() => {
    if (pageIsVisible && canFetchMore && onRequireMorePages && !loading) {
      console.log('fetching more pages...', page);
      onRequireMorePages();
    }
  }, [pageIsVisible, loading]);

  function handleUpdatedMessage(data: any) {
    const updatedMessage = data.updatedMessage;
    setData((oldData: any) => {
      const newData = JSON.parse(JSON.stringify(oldData));
      newData.messages = newData.messages.map((message: any) => {
        if (updatedMessage.id === message.id) {
          return updatedMessage;
        }
        return message;
      });
      return newData;
    });
  }

  function handleDeletedMessage(data: any) {
    const deletedMessage = data.deletedMessage;
    setData((oldData: any) => {
      const newData = JSON.parse(JSON.stringify(oldData));
      newData.messages = newData.messages.map((message: any) => {
        if (deletedMessage.id === message.id) {
          return deletedMessage;
        }
        return message;
      });
      return newData;
    });
  }

  if (loading) {
    // return <CircularProgress color="inherit" sx={{ alignSelf: 'center' }} />;
    return <></>;
  }
  if (error) return <div>Error</div>;

  const totalPages = data.pagination.totalPages;
  const canFetchMore = page !== totalPages;

  return (
    <Container
      ref={pageRef}
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {data.messages.map((message: any) => (
        <MessageComponent key={message.id} message={message} />
      ))}
    </Container>
  );
}

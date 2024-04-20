import { Button, Container, CircularProgress } from '@mui/material';

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
  showFetchMore?: boolean;
}

export default function MessagePage({
  roomId,
  roomType,
  page,
  pageSize,
  timelineDirection,
  originTimestamp,
  showFetchMore,
  ttl,
  onRequireMorePages,
}: MessagePageProps) {
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

    onSuccess: (data, key) => {
      console.log('data fetched for key', key, data);
    },

    onCacheHit: (res, key) => {
      console.log('cache hit ', key, res);
    },
  });
  useSocketEvent('updatedMessage', handleUpdatedMessage);
  useSocketEvent('deletedMessage', handleDeletedMessage);

  function handleUpdatedMessage(data: any) {
    console.log(data);
    const updatedMessage = data.updatedMessage;
    setData((oldData) => {
      const newData = JSON.parse(JSON.stringify(oldData));
      newData.messages = newData.messages.map((message) => {
        if (updatedMessage.id === message.id) {
          return updatedMessage;
        }
        return message;
      });
      return newData;
    });
  }

  function handleDeletedMessage(data: any) {
    console.log(data);
    const deletedMessage = data.deletedMessage;
    setData((oldData) => {
      const newData = JSON.parse(JSON.stringify(oldData));
      newData.messages = newData.messages.map((message) => {
        if (deletedMessage.id === message.id) {
          return deletedMessage;
        }
        return message;
      });
      return newData;
    });
  }

  if (loading) {
    return <CircularProgress color="inherit" sx={{ alignSelf: 'center' }} />;
  }
  if (error) return <div>Error</div>;

  const totalPages = data.pagination.totalPages;
  const canFetchMore = page !== totalPages;

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {showFetchMore && canFetchMore && (
        <Button
          onClick={onRequireMorePages}
          variant="outlined"
          size="small"
          sx={{ alignSelf: 'center' }}
        >
          Fetch more
        </Button>
      )}
      {data.messages.map((message: any) => (
        <MessageComponent key={message.id} message={message} />
      ))}
    </Container>
  );
}

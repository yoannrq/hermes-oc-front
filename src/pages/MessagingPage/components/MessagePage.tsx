import { Box, Button, Container, CircularProgress } from '@mui/material';

import MessageComponent from './MessageComponent';
import useFetch from '../../../hooks/useFetch';

interface MessagePageProps {
  roomId: number;
  roomType: string;
  page: number;
  pageSize: number;
  ttl: number;
  originTimestamp: number;
  onRequireMorePages?: () => void;
  isLastDisplayedPage?: boolean;
}

export default function MessagePage({
  roomId,
  roomType,
  page,
  pageSize,
  ttl,
  originTimestamp,
  isLastDisplayedPage,
  onRequireMorePages,
}: MessagePageProps) {
  const { loading, error, data, refetch } = useFetch({
    key: ['messages', roomType, roomId, page, pageSize, originTimestamp],
    url: `/api/me/messages/${roomType}/${roomId}`,
    params: {
      page,
      pageSize,
      originTimestamp,
    },
    method: 'get',
    cache: {
      enabled: true,
      ttl: 600,
    },

    onSuccess: (data, key) => {
      console.log('data fetched for key', key);
    },

    onCacheHit: (data, key) => {
      console.log('cache hit ', key);
    },
  });

  if (loading) {
    return <CircularProgress color="inherit" sx={{ alignSelf: 'center' }} />;
  }
  if (error) return <div>Error</div>;

  const totalPages = data?.data?.pagination.totalPages;
  const canFetchMore = page !== totalPages;
  console.log(
    'total pages: ',
    totalPages,
    page,
    isLastDisplayedPage,
    canFetchMore
  );

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {isLastDisplayedPage && canFetchMore && (
        <Button
          onClick={onRequireMorePages}
          variant="outlined"
          size="small"
          sx={{ alignSelf: 'center' }}
        >
          Fetch more
        </Button>
      )}
      {data?.data?.messages.map((message) => (
        <MessageComponent key={message.id} message={message} />
      ))}
    </Container>
  );
}

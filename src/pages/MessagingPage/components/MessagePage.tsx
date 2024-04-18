import { Button, Container, CircularProgress } from '@mui/material';

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
  originTimestamp,
  isLastDisplayedPage,
  onRequireMorePages,
}: MessagePageProps) {
  const { loading, error, data } = useFetch({
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

    onSuccess: (_, key) => {
      console.log('data fetched for key', key);
    },

    onCacheHit: (res, key) => {
      console.log('cache hit ', key, res);
    },
  });

  if (loading) {
    return <CircularProgress color="inherit" sx={{ alignSelf: 'center' }} />;
  }
  if (error) return <div>Error</div>;

  const totalPages = data?.pagination?.totalPages;
  const canFetchMore = page !== totalPages;

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
      {data?.messages?.map((message: any) => (
        <MessageComponent key={message.id} message={message} />
      ))}
    </Container>
  );
}


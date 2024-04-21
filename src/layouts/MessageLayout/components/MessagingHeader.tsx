import { ArrowBackIosNewRounded, Diversity3Rounded } from '@mui/icons-material';
import { Button, Typography, Container } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

import useFetch from '../../../hooks/useFetch';
import UserIcon from '../../../components/UserIcon';

function MessagingHeader() {
  const navigateTo = useNavigate();
  const { roomId, roomType } = useParams();

  const { data, loading, error } = useFetch({
    key: ['conversation', roomType, roomId],
    url: `/api/me/${roomType}s/${roomId}`,
    method: 'get',
    cache: {
      enabled: true,
      ttl: 60,
    },
  });

  let title = '...';

  if (error) {
    return 'Error loading conversation...';
  }

  if (!loading) {
    if (roomType === 'private') {
      title = `${data.receiver.firstname} ${data.receiver.lastname}`;
    }
  }

  return (
    <Container
      component="header"
      maxWidth="lg"
      sx={{
        marginTop: '.5em',
        marginBottom: '.5em',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1em',
      }}
    >
      <Button
        href="#"
        sx={{
          padding: '.5em',
          minWidth: 0,
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
        }}
      >
        <ArrowBackIosNewRounded onClick={() => navigateTo(-1)} />
      </Button>
      <Typography variant="h6">{title}</Typography>
      <Button
        href="#"
        sx={{
          padding: '.5em',
          minWidth: 0,
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
        }}
      >
        {loading && <Diversity3Rounded />}
        {!loading && <UserIcon user={data.receiver} />}
      </Button>
    </Container>
  );
}

export default MessagingHeader;

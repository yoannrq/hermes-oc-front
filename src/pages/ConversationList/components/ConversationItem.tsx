import { Typography, Box } from '@mui/material';

import UserIcon from '../../../components/UserIcon';
import { UserInterface } from '../../../contexts/userContext';
import UnreadNotif from './UnreadNotif';

export interface ConversationProps {
  user: UserInterface;
  title: string;
  content: string;
  unreadMessageCount: number;
  unreadMessagesCount: number;
  date: string;
}

function ConversationRecapItem({
  user,
  title,
  content,
  unreadMessagesCount,
  date,
}: ConversationProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        // gap: '0.7em',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        // bgcolor: '#e5e5e5e5',
        borderRadius: '13px',
        paddingY: '0.7em ',
        // marginBottom: '2em',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '0.7em',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'start',
          maxWidth: '75%',
          // width: '100%',
          // bgcolor: '#e5e5e5e5',
          borderRadius: '13px',
        }}
      >
        <UserIcon user={user} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '0',
          }}
        >
          <Typography
            variant="h2"
            fontWeight="600"
            fontSize="1em"
            sx={{
              textAlign: 'left',
              width: '100%',
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              width: '100%',
              textAlign: 'left',
              fontSize: '0.75em',
              fontWeight: '700',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {content}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'end',
        }}
      >
        <UnreadNotif unreadMessageCount={unreadMessagesCount} date={date} />
      </Box>
    </Box>
  );
}

export default ConversationRecapItem;

import { Typography, Box } from '@mui/material';

import UserIcon from '../../../components/UserIcon';
import { UserInterface } from '../../../contexts/userContext';
import UnreadNotif from './UnreadNotif';

export interface ConversationProps {
  // privateConversationid: number;
  user: UserInterface;
  title: string;
  content: string;
  // unreadMessageCount: number;
  unreadMessagesCount: number;
  date: string;
  // lastMessage: {
  //   id: number;
  //   conversationid: number;
  //   content: string;
  //   date: string;
  //   authorId: number;
  // };
  onClick: () => void;
}

function ConversationRecapItem({
  user,
  title,
  content,
  unreadMessagesCount,
  date,
  onClick,

}: ConversationProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '0.7em',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        borderRadius: '13px',
        paddingY: '0.7em ',
      }}
      onClick={onClick}
    >
      <UserIcon user={user} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: '0',
          width: '100%',
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'end',
          width: '100%',
        }}
      >
        <UnreadNotif
          unreadMessagesCount={unreadMessagesCount}
          date={date}
        />
      </Box>
    </Box>
  );
}

export default ConversationRecapItem;

import { Typography, Box } from '@mui/material';

import UserIcon from '../../../components/UserIcon/UserIcon'
import { UserInterface } from '../../../contexts/userContext';
import UnreadNotif from './UnreadNotif'

export interface ConversationProps {
  user: UserInterface,
  title: string,
  content: string,
  unreadMessageCount: number,
  unreadMessagesCount: number;
  date: string,
}

function ConversationRecapItem({ user, title, content, unreadMessagesCount, date }: ConversationProps) {
  return (
    <Box
    height={'10%'}
    width={'90%'}
    my={8}
    display="flex"
    alignItems="center"
    
    gap={4}
    p={2}
    sx={{
      justifyContent: 'space-between',
      p: 1,
      m: 1,
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
      color: (theme) =>
        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
      border: '5px solid',
      borderColor: (theme) =>
        theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
      borderRadius: 10,
      fontSize: '0.875rem',
      fontWeight: '700',
    }}
  >
    <UserIcon user={user}/>
        <Box
        display="flex"
        sx={{ flexDirection: 'column' }}
        >
          
          <Typography>{title}</Typography>
          <Typography>{content}</Typography>
          
        </Box>
        <Box
        display="flex"
        alignItems="center"
        sx={{ 
          flexDirection: 'column' }}>
        <UnreadNotif 
        unreadMessageCount={unreadMessagesCount}date={date} />
        </Box>
    </Box>
  );
}

export default ConversationRecapItem;
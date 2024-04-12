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
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#ebebeb'),
      color: (theme) =>
        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
      border: '5px solid',
      borderColor: (theme) =>
        theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
      borderRadius: 10,
      fontSize: '1',
      fontWeight: '700',
    }}
  >
  <Box
  width={'15%'}>
    <UserIcon user={user}/>
    </Box>
        <Box
        width={'70%'}
        display="flex"
        sx={{ flexDirection: 'column' }}
        >
          
          <Typography
           sx={{
            justifyContent: 'space-between',
 
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#ebebeb'),
            color: (theme) =>
              theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
            fontSize: '1',
            fontWeight: '700',
          }}>{title}</Typography>
          <Typography
           sx={{
            justifyContent: 'space-between',
            p: 1,
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#d4d4d4'),
            color: (theme) =>
              theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
            border: '5px solid',
            borderColor: (theme) =>
              theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
            borderRadius: 10,
            fontSize: '1',
            fontWeight: '700',
          }}
          >{content}</Typography>
          
        </Box>
        <Box
        display="flex"
        alignItems="center"
        width={'15%'}
        justifyContent={'center'}
        sx={{ 
          flexDirection: 'row' }}>
        <UnreadNotif 
        unreadMessageCount={unreadMessagesCount}date={date} />
        </Box>
    </Box>
  );
}

export default ConversationRecapItem;
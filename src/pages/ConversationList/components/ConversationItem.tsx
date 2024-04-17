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
        gap: '0.7em',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        bgcolor: '#e5e5e5e5',
        borderRadius: '13px',
        padding: '0.55em 0.75em',
        marginBottom: '0.7em',
      }}
      // height={'10%'}
      // width={'90%'}
      // my={8}
      // display="flex"
      // alignItems="center"

      // gap={4}
      // p={2}
      // sx={{
      //   justifyContent: 'space-between',
      //   p: 1,
      //   m: 1,
      //   bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#ebebeb'),
      //   color: (theme) =>
      //     theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
      //   border: '5px solid',
      //   borderColor: (theme) =>
      //     theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
      //   borderRadius: 10,
      //   fontSize: '1',
      //   fontWeight: '700',
      // }}
    >
      <Box 
        sx={{
          display: 'flex',
          gap: '0.7em',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'start',
          maxWidth: '75%',
          bgcolor: '#e5e5e5e5',
          borderRadius: '13px',
          // padding: '0.55em 0.75em',
        
        }}
      >
        {/* <Box
          sx={{
            // position: 'relative',
            backgroundColor: (t) => t.palette.background.paper,
            borderRadius: '50%',
            height: '2.5em',
            width: '2.5em',
            minWidth: '2.5em',
            minHeight: '2.5em',
          }}
        > */}
          <UserIcon user={user} />
        {/* </Box> */}
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
            // sx={{
            //   justifyContent: 'space-between',

            //   bgcolor: (theme) =>
            //     theme.palette.mode === 'dark' ? '#101010' : '#ebebeb',
            //   color: (theme) =>
            //     theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
            //   fontSize: '1',
            //   fontWeight: '700',
            // }}

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
            // sx={{
            //   justifyContent: 'space-between',
            //   p: 1,
            //   bgcolor: (theme) =>
            //     theme.palette.mode === 'dark' ? '#101010' : '#d4d4d4',
            //   color: (theme) =>
            //     theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
            //   border: '5px solid',
            //   borderColor: (theme) =>
            //     theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
            //   borderRadius: 10,
            //   fontSize: '1',
            //   fontWeight: '700',
            // }}

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
        // display="flex"
        // alignItems="center"
        // width={'15%'}
        // justifyContent={'center'}
        // sx={{
        //   flexDirection: 'row',
        // }}

        // fontWeight="800"
        // fontFamily="Iter-Bold, sans-serif"
        // color={(t) => t.palette.text.secondary}

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

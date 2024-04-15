
import { Box, Button, Snackbar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';

import { useUserContext } from '../../../contexts/userContext';
import AvatarComponent from '../../../components/AvatarComponent';
import MessageBubble from './MessageBubble';
// import AvatarGroup from './AvatarGroup';

export interface MessageComponentProps {
  message: {
    id: string;
    conversationId: number;
    authorId: number;
    content: string;
    date: string;
    deleted: boolean;
  };
  style?: object;
}

function MessageComponent({ message }: MessageComponentProps) {
  const user = useUserContext();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [showButton, setShowButton] = useState(false);
  
  const isAuthorMessage = user.id === message.authorId;

  const handleClick = async (event) => {
    // console.log('Message clicked:', message.id);

    setShowButton(true);
  };

  const handleModifyClick = () => {
    console.log('Le bouton "Modifier" a été cliqué !');
  };

  //!
  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleDeleteClick = async () => {
    console.log('Le bouton "Supprimer" a été cliqué !');

    handleOpenSnackbar();

    try {
      const response = await fetch(`/api/me/messages/${message.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log(`Le message ${message.id} a été supprimé avec succès !`);
      } else {
        console.error(
          'Erreur lors de la suppression du message (else):',
          response.status
        );
      }
    } catch (error) {
      console.error('Erreur lors de la suppression du message (catch):', error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '.5em',
        padding: '0.5em 0em',
        alignSelf: isAuthorMessage ? 'flex-end' : 'flex-start',
        // bgcolor: isAuthorMessage ? 'primary.main' : 'secondary.main', // à améliorer
      }}
      // onClick={isAuthorMessage ? handleClick : undefined}
      onMouseLeave={() => setShowButton(false)}
      // style={{ cursor: isAuthorMessage ? 'pointer' : 'default' }}
    >

      <Snackbar
        open={openSnackbar}
        message="Voulez-vous vraiment supprimer ce message ?"
        action={
          <Button color="secondary" size="small" onClick={handleCloseSnackbar}>
            Supprimer
          </Button>
        }
      ></Snackbar>

      {!isAuthorMessage && (
        <AvatarComponent src="https://mui.com/static/images/avatar/3.jpg" />
      )}
      <MessageBubble
        message={message}
        onClick={isAuthorMessage ? handleClick : null}
        style={{ cursor: isAuthorMessage ? 'pointer' : 'default' }}
      />

      {showButton && (
        <Box sx={{
           display: 'flex',
           flexDirection: 'column', 
           justifyContent: 'center',
           gap: '.5em',
          }}
          >
          <Button
            onClick={handleModifyClick}
            variant="text"
            sx={{ 
              minWidth: 0,
              padding: 0,
              // fontSize: '.7em' 
            }}
          >
            <EditIcon />
          </Button>
          <Button
            onClick={handleDeleteClick}
            variant="text"
            sx={{ 
              minWidth: 0,
              padding: 0,
              // fontSize: '.7em' 
            }}
          >
            <DeleteIcon />
          </Button>
        </Box>
      )}
      {/* <AvatarGroup /> */}
    </Box>
  );
}

export default MessageComponent;

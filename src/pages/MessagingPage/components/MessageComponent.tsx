import { Box, Button, Snackbar } from '@mui/material';
import { Delete, Edit, Check, Clear } from '@mui/icons-material';
import { useState, useEffect, useRef } from 'react';

import { useUserContext } from '../../../contexts/userContext';
import AvatarComponent from '../../../components/AvatarComponent';
import MessageBubble from './MessageBubble';

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
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(message.content);
  const [isDeleted, setIsDeleted] = useState(message.deleted);

  const isAuthorMessage = user.id === message.authorId;

  const boxRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
        setShowButton(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClick = async () => {
    if (!isEditing) {
      setShowButton(true);
    }
  };

  const handleModifyClick = () => {
    console.log('Le bouton "Modifier" a été cliqué !');

    setIsEditing((prevIsEditing) => !prevIsEditing);

    setShowButton(false);
  };

  const handleSaveEdit = async () => {
    setIsEditing(false);

    try {
      const response = await fetch(`/api/me/messages/${message.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: editedContent,
        }),
      });

      if (response.ok) {
        console.log(`Le message ${message.id} a été modifié avec succès !`);
      } else {
        console.error(
          'Erreur lors de la modification du message (else):',
          response.status
        );
      }
    } catch (error) {
      console.error(
        'Erreur lors de la modification du message (catch):',
        error
      );
    }
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
  };

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleDeleteClick = async () => {
    console.log('Le bouton "Supprimer" a été cliqué !');

    if (isDeleted) {
      setIsDeleted(false);
    } else {
      setIsDeleted(true);

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
        console.error(
          'Erreur lors de la suppression du message (catch):',
          error
        );
      }
    }

    handleCloseSnackbar();
    setShowButton(false);
  };

  return (
    <Box
      ref={boxRef}
      sx={{
        display: 'flex',
        gap: '.5em',
        padding: '0.5em 0em',
        alignSelf: isAuthorMessage ? 'flex-end' : 'flex-start',
      }}
    >
      <Snackbar
        open={openSnackbar}
        message="Voulez-vous vraiment supprimer ce message ?"
        action={
          <>
            <Button
              color="secondary"
              size="small"
              onClick={handleCloseSnackbar}
            >
              Annuler
            </Button>
            <Button color="secondary" size="small" onClick={handleDeleteClick}>
              Supprimer
            </Button>
          </>
        }
      ></Snackbar>

      {!isAuthorMessage && (
        <AvatarComponent src="https://mui.com/static/images/avatar/3.jpg" />
      )}
      <Box sx={{ flex: 1 }}>
        {isDeleted ? (
          <Box
            sx={{
              // border: '1px solid #ccc',
              borderRadius: '10px',
              // padding: '10px',
              fontStyle: 'italic',
              color: '#aaa',
            }}
          >
            Message supprimé.
          </Box>
        ) : (
          <MessageBubble
            message={message}
            onClick={isAuthorMessage ? handleClick : undefined}
            style={{ cursor: isAuthorMessage ? 'pointer' : 'default' }}
            isEditing={isEditing}
            updateMessageContent={setEditedContent}
          />
        )}
      </Box>
      {showButton && (
        
        <Box
          sx={{
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
            }}
          >
            <Edit />
          </Button>

          <Button
            onClick={handleOpenSnackbar}
            variant="text"
            sx={{
              minWidth: 0,
              padding: 0,
            }}
          >
            <Delete />
          </Button>
        </Box>
      )}
      {isEditing && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '.5em',
          }}
        >
          <Button
            onClick={handleSaveEdit}
            variant="text"
            sx={{
              minWidth: 0,
              padding: 0,
            }}
          >
            <Check />
          </Button>
          <Button
            onClick={handleCloseEdit}
            variant="text"
            sx={{
              minWidth: 0,
              padding: 0,
            }}
          >
            <Clear />
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default MessageComponent;


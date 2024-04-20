import { Box, Button, Snackbar } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { useUserContext } from '../../../contexts/userContext';

import Toolbar, { EditState } from './Toolbar';
import AvatarComponent from '../../../components/AvatarComponent';
import MessageBubble from './MessageBubble';
import axios from 'axios';

export interface MessageComponentProps {
  message: {
    id: string;
    conversationId: number;
    authorId: number;
    content: string;
    date: string;
    deleted: boolean;
    updatedAt: string | null;
  };
}

function MessageComponent({ message }: MessageComponentProps) {
  const user = useUserContext();
  const [snackbarIsDisplayed, setSnackbarIsDisplayed] = useState(false);
  const [toolbarIsDisplayed, setToolbarIsDisplayed] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(message.content);

  const boxRef = useRef<HTMLElement>(null);
  useOnClickOutside(boxRef, handleMessageClickOutside);

  const isAuthorMessage = user.id === message.authorId;

  function handleMessageClickOutside() {
    setToolbarIsDisplayed(false);
    setIsEditing(false);
  }

  function handleMessageClick() {
    if (!isEditing) {
      setToolbarIsDisplayed(true);
    }
  }

  function handleValidateModification() {
    setIsEditing(false);
    axios
      .patch(`/api/me/messages/${message.id}`, {
        content: editedContent,
      })
      .catch((err) => {
        console.error('Erreur lors de la modification du message (else):', err);
      });
  }

  function handleConfirmDeleteMessage() {
    setSnackbarIsDisplayed(true);
  }

  function handleCloseSnackbar() {
    setSnackbarIsDisplayed(false);
  }

  function handleDeleteClick() {
    axios.delete(`/api/me/messages/${message.id}`).catch((err) => {
      console.error('Erreur lors de la suppression du message (else):', err);
    });
    handleCloseSnackbar();
    setToolbarIsDisplayed(false);
  }

  return (
    <Box
      ref={boxRef}
      onClick={handleMessageClick}
      sx={{
        display: 'flex',
        gap: '.5em',
        padding: '0',
        margin: '0.5em 0',
        borderRadius: '0.6em',
        alignSelf: isAuthorMessage ? 'flex-end' : 'flex-start',
      }}
    >
      <Snackbar
        open={snackbarIsDisplayed}
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
      />

      {!isAuthorMessage && (
        <AvatarComponent src="https://mui.com/static/images/avatar/3.jpg" />
      )}

      <MessageBubble
        message={message}
        editedContent={editedContent}
        onEditedContentChanged={setEditedContent}
        isEditing={isEditing}
      />

      <Toolbar
        isDisplayed={toolbarIsDisplayed}
        editState={isEditing ? EditState.Editing : EditState.Default}
        onModifyButtonClick={() => setIsEditing(true)}
        onCancelModification={() => {
          setIsEditing(false);
          setEditedContent(message.content);
        }}
        onDeleteButtonClick={handleConfirmDeleteMessage}
        onValidateModification={handleValidateModification}
      />
    </Box>
  );
}

export default MessageComponent;

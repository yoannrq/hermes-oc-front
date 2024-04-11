import Box from '@mui/material/Box'

import { UserInterface } from './../../contexts/userContext.tsx'


export interface UserIconProps {
  user: UserInterface,

}


function UserIcon({ user }: UserIconProps) {
  // Remplacez ceci par la logique pour afficher l'icône utilisateur
  return (
    <Box>
      {user.profilePictureUrl && 
        <img src="user-icon.png" alt="User Icon" />
      }

      {user.profilePictureUrl && 
       <Box>{}</Box>
      
      }
    </Box>
  );
}

export default UserIcon;
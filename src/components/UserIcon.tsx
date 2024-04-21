import { Avatar } from '@mui/material';

export interface UserIconProps {
  user: {
    id: number;
    firstname: string;
    lastname: string;
    initials?: string;
    profilePictureUrl: string;
  };
}

export default function UserIcon({ user }: UserIconProps) {


  //! à vérifier
  if (!user) {
    return null;
  }




  const initials = user.initials || `${user.firstname[0]}${user.lastname[0]}`;

  return (
    <Avatar
      alt={`${user.firstname} ${user.lastname}`}
      src={user.profilePictureUrl}
    >
      {initials}
    </Avatar>
  );
}


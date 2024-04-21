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
  const initials = `${user.firstname[0].toLocaleUpperCase()}${user.lastname[0].toLocaleUpperCase()}`;

  return (
    <Avatar
      alt={`${user.firstname} ${user.lastname}`}
      src={user.profilePictureUrl}
    >
      {initials}
    </Avatar>
  );
}


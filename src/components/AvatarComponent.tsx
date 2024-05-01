import { Avatar } from '@mui/material';

type AvatarComponentProps = {
  sx?: object;
  alt?: string;
  src?: string;
};

function AvatarComponent( { sx, alt, src }: AvatarComponentProps) {
  return <Avatar sx={sx} alt={alt} src={src} />;
}

export default AvatarComponent;
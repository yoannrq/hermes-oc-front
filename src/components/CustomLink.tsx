import Link, { LinkProps as MuiLinkProps } from '@mui/material/Link';

type AllowedVariants = 'body1' | 'body2';

export interface LinkProps extends Omit<MuiLinkProps, 'variant'> {
  href: string;
  variant?: AllowedVariants;
  text: string;
}

function CustomLink({ href, text, variant }: LinkProps) {
  return (
    <Link href={href} variant={variant}>
      {text}
    </Link>
  );
}

export default CustomLink;

import { FieldProps } from '../../../components/CustomField';
import { LinkProps } from '../../../components/CustomLink';

export const fieldsConfig: FieldProps[] = [
  {
    type: 'text',
    name: 'rpps',
    id: 'rpps',
    label: 'Numero RPPS',
    required: true,
    fullWidth: true,
    autoFocus: true,
    gridSizes: { xs: 12 },
  },
  {
    type: 'password',
    autoComplete: 'new-password',
    name: 'password',
    id: 'password',
    label: 'Mot de passe',
    required: true,
    fullWidth: true,
    gridSizes: { xs: 12 },
  },
];

export const linksConfig: LinkProps[] = [
  {
    href: '#',
    variant: 'body2',
    text: 'Mot de passe oublié?',
  },
  {
    href: '#',
    variant: 'body2',
    text: 'Créer un compte',
  },
];
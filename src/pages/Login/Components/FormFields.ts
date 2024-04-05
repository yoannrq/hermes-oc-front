export interface FieldProps {
  type: string,
  name: string,
  id: string,
  label: string,
  required: boolean,
  fullWidth: boolean,
  gridSizes: {
    xs?: number,
    sm?: number,
  }
  autoFocus?: boolean,
  autoComplete?: string,
}

export const fieldsConfig: FieldProps[] = [
  {
    type: 'text',
    name: 'email',
    id: 'email',
    label: 'Numero RPPS ou email',
    required: true,
    fullWidth: true,
    gridSizes: { xs: 12 },
    autoFocus: true,
  },
  {
    type: 'password',
    name: 'password',
    id: 'password',
    label: 'Mot de passe',
    required: true,
    fullWidth: true,
    gridSizes: { xs: 12 },
    autoComplete: 'new-password',
  },
];

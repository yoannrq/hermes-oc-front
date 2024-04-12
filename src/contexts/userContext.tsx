import { createContext, useContext } from 'react';

export interface UserInterface {
  isLogged: boolean;
  id: number;
  firstname: string;
  lastname: string;
  fullname: string;
  email: string;
  initials: string;
  rppsCode: string;
  profilePictureUrl: string;
}

export function useUserContext() {
  return useContext(UserContext);
}

export const UserContext = createContext({
  isLogged: false,
  id: -1,
  firstname: '',
  lastname: '',
  fullname: '',
  initials: '',
  email: '',
  rppsCode: '',
  profilePictureUrl: '',
});

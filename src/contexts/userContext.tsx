import { createContext, useContext } from 'react';

export interface UserInterface {
  isLogged: boolean;
  firstname: string;
  lastname: string;
  email: string;
}

export function useUserContext() {
  return useContext(UserInfoContext);
}

export const UserInfoContext = createContext({
  isLogged: false,
  firstname: '',
  lastname: '',
  email: '',
});

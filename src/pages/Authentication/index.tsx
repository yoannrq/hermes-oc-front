import React from 'react';
import { useState } from 'react';
import Login from './../../pages/Login';
import SignUp from './../../pages/SignUp';

import { UserInterface } from './../../contexts/userContext';

export interface LoginRequiredProps {
  children: React.ReactNode;
}

export default function LoginRequired({ children }: LoginRequiredProps) {
  const [user, setUser] = useState<null | UserInterface>(null);
  const [wantSignUp, setWantSignUp] = useState(false);

  return (
    <>
      {!user && wantSignUp && (
        <SignUp onRequireLogin={() => setWantSignUp(false)} />
      )}
      {!user && !wantSignUp && (
        <Login
          onRequireSignUp={() => setWantSignUp(true)}
          onConnection={(user: UserInterface) => {
            setUser(user);
          }}
        />
      )}
      {user && children}
    </>
  );
}

import React, { useState } from 'react';

import Header from './Components/Header';
import Footer from './Components/Footer';
import SignUpForm from './Components/SignUpForm';
import LoginForm from './Components/LoginForm';

import { UserInterface } from '../../contexts/userContext';

export interface AuthPageProps {
  onConnection: (user: UserInterface) => void;
}

export default function AuthPage({ onConnection }: AuthPageProps) {
  const [wantSignUp, setWantSignUp] = useState(false);

  return (
    <>
      <Header />
      {wantSignUp && <SignUpForm onRequireLogin={() => setWantSignUp(false)} />}
      {!wantSignUp && (
        <LoginForm
          onRequireSignUp={() => setWantSignUp(true)}
          onConnection={onConnection}
        />
      )}
      <Footer />
    </>
  );
}

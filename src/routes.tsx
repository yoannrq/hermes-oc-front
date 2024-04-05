import React from 'react';
import { useEffect } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root/Root';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import { UserInterface } from './contexts/userContext';

import { useState } from 'react';

export interface LoginRequiredProps {
  children: React.ReactNode,
}


function LoginRequired({ children }: LoginRequiredProps){
  const [user, setUser] = useState<null|UserInterface>(null)
  const [wantSignUp, setWantSignUp] = useState(false)

  console.log("current user : ", user)

  useEffect(() => {
    // Todo check if user have already a jwt token.
    console.log("Check if jwt token is valid")

  }, [])

  return (
    <>
      {!user && wantSignUp &&
        <SignUp onRequireLogin={() => setWantSignUp(false)} />
      }
      {!user && !wantSignUp &&
        <Login onRequireSignUp={() => setWantSignUp(true)} onConnection={(user: UserInterface) => {setUser(user)}}/>
      }
      {user && 
        children
      }
    </>
  )
}

export const router = createBrowserRouter([
  {
    // path correspond à l'url de la page
    path: '/',
    // element à l'élément à afficher sur la page
    element: <Root />,
    // en cas d'erreur on afficher le composant NotFound
    //! errorElement: <NotFound />,
    // Quand ma page va être chargée, la fonction loader va être appelée
    // Cela permet de charger des données avant d'afficher la page
    //! loader: rootLoader,

    // Une route peut contenir des enfants
    // Cela permet de créer des sous-routes
    // L'élément principal (celui du parent) servira de structure
    // Et on pourra injecter des éléments dans le parent à un endroit précis
    children: [
      // La propriété element va être placée dans le composant Outlet du parent
      {
        path: '/',
        element: (
          <LoginRequired>
            <h1>Home page</h1>
          </LoginRequired>
        ),
      },
      {
        path: '/test',
        element: 
        <LoginRequired>
          <h1>
            <p>Bonjour</p>
            <p>ok</p>
          </h1>
        </LoginRequired>,
      }
    ],
  },
]);

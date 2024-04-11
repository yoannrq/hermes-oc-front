import { createBrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';

import { useSocketContext } from './contexts/socketContext.tsx';
import Root from './pages/Root/Root';
import LoginRequired from './components/loginRequired.tsx';
import HomePageComponent from './pages/HomePage/index.tsx';
import Messaging from './pages/MessagingPage/index.tsx';

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
            <HomePage />
          </LoginRequired>
        ),
      },
      {
        path: '/test',
        element: (
          <LoginRequired>
            <h1>
              <p>Bonjour</p>
              <p>ok</p>
            </h1>
          </LoginRequired>
        ),
      },

      // Fausses routes, juste pour avoir un visuel
      {
        path: '/home',
        element: <HomePageComponent />,
      },
      {
        path: '/messaging',
        element: <Messaging />,
      },
    ],
  },
]);

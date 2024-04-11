import { createBrowserRouter } from 'react-router-dom';

// [ Containers ]
import RootContainer from '../containers/RootContainer/RootContainer';
import NavigationContainer from '../containers/NavigationContainer/NavigationContainer';

// [ Routers ]
import NavigationRouter from '../routers/NavigationRouter';

export default createBrowserRouter([
  {
    // path correspond à l'url de la page
    path: '/',
    // element à l'élément à afficher sur la page
    element: <RootContainer />,
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
        element: <NavigationContainer />,
        children: NavigationRouter,
      },
    ],
  },
]);

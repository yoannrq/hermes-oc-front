import HomeRouter from '../routers/HomeRouter';

import RedirectTo from './utils/RedirectTo';
import HomeContainer from '../containers/HomeContainer/HomeContainer';

export default [
  {
    path: '/',
    element: <RedirectTo url="/home" />,
  },
  {
    path: 'home',
    element: <HomeContainer />,
    children: HomeRouter,
  },
  {
    path: 'teams',
    element: <h1>Equipe</h1>,
  },
  {
    path: 'private',
    element: <h1>Conversations</h1>,
  },
  {
    path: 'patients',
    element: <h1>Patients</h1>,
  },
];

import HomeRouter from '../routers/HomeRouter';

import RedirectTo from './utils/RedirectTo';
import HomeLayout from '../layouts/HomeLayout/HomeLayout';

export default [
  {
    path: '/',
    element: <RedirectTo url="/home" />,
  },
  {
    path: 'home',
    element: <HomeLayout />,
    children: HomeRouter,
  },
  {
    path: 'teams',
    element: <h1>Equipe</h1>,
  },
  {
    path: 'private',
    element: <h1>Privée</h1>,
  },
  {
    path: 'patients',
    element: <h1>Patients</h1>,
  },
];

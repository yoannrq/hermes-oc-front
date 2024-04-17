import HomeRouter from '../routers/HomeRouter';

// import RedirectTo from './utils/RedirectTo';
import HomeLayout from '../layouts/HomeLayout/HomeLayout';
import ConversastionList from '../pages/ConversationList';


export default [
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
    element: <ConversastionList />,
  },
  {
    path: 'patients',
    element: <h1>Patients</h1>,
  },
];


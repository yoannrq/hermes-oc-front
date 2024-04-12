import HomeLayout from '../Layouts/HomeLayout/HomeLayout';
import NotificationPage from '../pages/NotificationPage';

import RedirectTo from './utils/RedirectTo';

export default [
  {
    path: '',
    element: <RedirectTo url="./notifications" />,
  },
  {
    path: 'notifications',
    element: <NotificationPage />,
  },
  {
    path: 'bookmarks',
    element: <h1>Bookmarks</h1>,
  },
  {
    path: 'tasks',
    element: <h1>Tâches</h1>,
  },
];

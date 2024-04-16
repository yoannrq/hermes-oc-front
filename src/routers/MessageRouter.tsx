import RedirectTo from './utils/RedirectTo';

import Messaging from '../pages/MessagingPage';
import backend from '../utils/backend';

export default [
  {
    path: '',
    element: <RedirectTo url="./private" />,
  },
  {
    path: ':roomType/:roomId',
    element: <Messaging />,
  },
];

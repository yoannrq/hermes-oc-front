import RedirectTo from './utils/RedirectTo';

import Messaging from '../pages/MessagingPage';

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

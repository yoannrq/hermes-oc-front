import RedirectTo from './utils/RedirectTo';

import Messaging from '../pages/MessagingPage';
import backend from '../utils/backend';

export default [
  {
      path: "",
      element: <RedirectTo url="./private"/>,
  },
  {
    path: 'private/:conversationId',
    element: <Messaging />,
    loading: <h1>Loading messages...</h1>,
    loader: async ({ params }) => { 
        return backend.get(`/api/me/messages/conversation/${params.conversationId}`)
    },
  },
];


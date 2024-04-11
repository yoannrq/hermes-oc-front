import { Outlet } from 'react-router-dom';

import WebSocketProvider from '../../components/websocketProvider.tsx';

function Root() {
  return (
    <WebSocketProvider>
      <Outlet />
    </WebSocketProvider>
  );
}

export default Root;


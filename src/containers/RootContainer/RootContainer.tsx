import { Outlet } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import WebSocketProvider from './components/WebsocketProvider';
import LoginRequired from './components/LoginRequired';

export default function RootContainer() {
  return (
    <WebSocketProvider>
      <LoginRequired>
        <CssBaseline />
        <Outlet />
      </LoginRequired>
    </WebSocketProvider>
  );
}

import { Outlet } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import WebSocketProvider from './components/WebsocketProvider';
import LoginRequired from './components/LoginRequired';
import CacheProvider from './components/CacheProvider';

export default function RootLayout() {
  return (
    <WebSocketProvider>
      <LoginRequired>
        <CacheProvider>
          <CssBaseline />
          <Outlet />
        </CacheProvider>
      </LoginRequired>
    </WebSocketProvider>
  );
}

import { Outlet } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import WebSocketProvider from './components/WebsocketProvider';
import LoginRequired from './components/LoginRequired';
import CacheProvider from './components/CacheProvider';
import { StrictMode } from 'react';

export default function RootLayout() {
  return (
    <StrictMode>
      <WebSocketProvider>
        <LoginRequired>
          <CacheProvider>
            <CssBaseline />
            <Outlet />
          </CacheProvider>
        </LoginRequired>
      </WebSocketProvider>
    </StrictMode>
  );
}

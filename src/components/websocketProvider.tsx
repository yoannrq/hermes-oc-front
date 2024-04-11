import React, { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

import { socketContext } from '../contexts/socketContext.tsx';

export interface WebSocketProviderProps {
  children: React.ReactNode;
}

export default function WebSocketProvider({
  children,
}: WebSocketProviderProps) {
  const [socket, setSocket] = useState<null | Socket>(null);

  useEffect(() => {
    const URL = import.meta.env.DEV ? 'http://localhost:3000' : '';
    const socket = io(URL);

    socket.on('connect', () => {
      console.log('Connected to server with socket id:', socket.id);
      setSocket(socket);
      console.log(socket.id);
    });
    return () => {
      socket.close();
    };
  }, []);

  return (
    <socketContext.Provider value={socket}>{children}</socketContext.Provider>
  );
}

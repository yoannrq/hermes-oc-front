import React, { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

import { socketContext } from '../../../contexts/socketContext.tsx';
import axios, { AxiosError, AxiosResponse } from 'axios';

export interface WebSocketProviderProps {
  children: React.ReactNode;
}

export default function WebSocketProvider({
  children,
}: WebSocketProviderProps) {
  const [socket, setSocket] = useState<null | Socket>(null);

  async function declareSocketId(socketId: string) {
    return axios.post('/api/me/socketIds', { socketId });
  }

  useEffect(() => {
    const URL = import.meta.env.DEV ? 'http://localhost:3000' : '';
    const socket = io(URL, {
      auth: {
        token: 'my-token' + Date.now(),
      },
    });

    socket.on('connect', async () => {
      console.log('Connected to server with socket id:', socket.id);

      if (!socket.id) {
        console.log('Socket is not connected. Please check your connection.');
        return;
      } else {
        declareSocketId(socket.id)
          .then((_: AxiosResponse) => {
            socket.emit('authenticate');
            socket.on('authenticated', ({ socketId, user }) => {
              console.log(
                `Socket authenticates this socketId: ${socketId} with user: ${user}`
              );
              setSocket(socket);
            });
          })
          .catch((err: AxiosError) => {
            console.log('Authentication websocket fail.', err);
          });
      }
    });

    socket.on('connect_error', (error) => {
      console.log('Websocket error :', error);
    });

    return () => {
      socket.close();
    };
  }, []);

  return (
    <socketContext.Provider value={socket}>{children}</socketContext.Provider>
  );
}

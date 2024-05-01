import { createContext, useContext } from 'react';
import { Socket } from 'socket.io-client';

export function useSocketContext() {
  return useContext(socketContext);
}

export const socketContext = createContext<Socket | null>(null);

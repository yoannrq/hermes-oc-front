import { useEffect } from 'react';
import { useSocketContext } from '../contexts/socketContext';

export default function useSocketEvent(
  eventName: string,
  eventHandler: (args: any) => void
) {
  const socket = useSocketContext();

  useEffect(() => {
    if (socket) {
      socket.on(eventName, eventHandler);
    }
    return () => {
      if (socket) {
        socket.off(eventName, eventHandler);
      }
    };
  }, [socket]);
}

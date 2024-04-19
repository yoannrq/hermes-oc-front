import { useEffect } from 'react';
import { useSocketContext } from '../contexts/socketContext';

export default function useSocketRoom(
  roomName: string,
  roomArgs?: { [key: string]: unknown },
  onJoin?: (message: string) => void,
  onLeave?: (message: string) => void,
  onJoinError?: (message: string, error: unknown) => void,
  onLeaveError?: (message: string, error: unknown) => void
) {
  const socket = useSocketContext();

  useEffect(() => {
    if (socket) {
      if (roomName) {
        socket.emit(
          `socketRoom:join:${roomName}`,
          roomArgs,
          ({
            success,
            message,
            error,
          }: {
            success: boolean;
            message: string;
            error: unknown;
          }) => {
            if (success) {
              console.log(
                `Joined room ${roomName} ${JSON.stringify(roomArgs)}`
              );
              if (onJoin) onJoin(message);
            } else {
              console.log(
                `Failed to join room ${roomName} ${JSON.stringify(
                  roomArgs
                )} with error: ${message} ${JSON.stringify(error)}`
              );
              if (onJoinError) onJoinError(message, error);
            }
          }
        );
      }
    }
    return () => {
      if (socket) {
        if (roomName) {
          socket.emit(
            `socketRoom:leave:${roomName}`,
            roomArgs,
            ({
              success,
              message,
              error,
            }: {
              success: boolean;
              message: string;
              error: unknown;
            }) => {
              if (success) {
                console.log(
                  `Leaving room ${roomName} ${JSON.stringify(roomArgs)}`
                );
                if (onLeave) onLeave(message);
              } else {
                console.log(
                  `Failed to leave room ${roomName} ${JSON.stringify(roomArgs)} with error: ${message} ${JSON.stringify(error)}`
                );
                if (onLeaveError) onLeaveError(message, error);
              }
            }
          );
        }
      }
    };
  }, [socket]);
}

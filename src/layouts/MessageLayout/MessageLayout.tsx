import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import MessagingHeader from './components/MessagingHeader';
import MessagingTextArea from './components/MessagingTextArea';

export type ContextType = {
  scrollHeight: number;
  setScrollHeight: React.Dispatch<React.SetStateAction<number>>;
  scrollPosition: number;
  setScrollPosition: React.Dispatch<React.SetStateAction<number>>;
};

export default function NavigationLayout() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);

  return (
    <>
      <MessagingHeader />
      <Outlet
        context={
          {
            scrollPosition,
            setScrollPosition,
            scrollHeight,
            setScrollHeight,
          } satisfies ContextType
        }
      />
      <MessagingTextArea />
    </>
  );
}

import { Outlet } from 'react-router-dom';


import MessagingHeader from './components/MessagingHeader';
import MessagingTextArea from './components/MessagingTextArea';

export default function NavigationLayout() {
  return (
    <>
      <MessagingHeader />
      <Outlet />
      <MessagingTextArea />
    </>
  );
}


import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import Header from './components/NavigationHeader';

export default function NavigationLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Navbar />
    </>
  );
}


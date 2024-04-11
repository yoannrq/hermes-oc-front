import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import Header from './components/NavigationHeader';

export default function NavigationContainer() {
  return (
    <>
      <Header />
      <Outlet />
      <Navbar />
    </>
  );
}

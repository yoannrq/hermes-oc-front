// import Header from '../../components/AuthHeader/Header';
// import Login from '../Login/index';
// import Footer from '../../components/AuthFooter/Footer';
// import './App.scss';
import { Outlet } from 'react-router-dom';

import WebSocketProvider from './../../components/websocketProvider/websocketProvider.tsx';

// import Login from "../Login";

function Root() {
  return (
    <WebSocketProvider>
      <Outlet />
    </WebSocketProvider>
  );
}

export default Root;

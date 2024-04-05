// import Header from '../../components/AuthHeader/Header';
// import Login from '../Login/index';
// import Footer from '../../components/AuthFooter/Footer';
// import './App.scss';
import { Outlet } from "react-router-dom";

// import Login from "../Login";

function Root() {
  return (
    // <div className="app">
    //   {/* <Header />
    //   <Login />
    //   <Footer /> */}
    // </div>
      <Outlet />
  );
}

export default Root;

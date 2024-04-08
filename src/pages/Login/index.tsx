import Header from "../../components/AuthHeader/Header";
import Footer from "../../components/AuthFooter/Footer";
import LoginForm from "./Components/LoginForm";

import { UserInterface } from "../../contexts/userContext";

export interface LoginProps {
  onRequireSignUp: () => void,
  onConnection: (user: UserInterface) => void,
}

function Login ({ onRequireSignUp, onConnection}: LoginProps) {
  return (
    <>
      <Header />
      <LoginForm onRequireSignUp={onRequireSignUp} onConnection={onConnection} />
      <Footer />
    </>
  )
}

export default Login;
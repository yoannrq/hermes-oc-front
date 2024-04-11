import Header from "../../components/AuthHeader";
import Footer from "../../components/AuthFooter";
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
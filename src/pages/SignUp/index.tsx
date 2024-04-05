import Header from "../../components/AuthHeader/Header";
import Footer from "../../components/AuthFooter/Footer";
import SignUpForm from "./components/SignUpForm";

export interface SignUpProps {
  onRequireLogin: () => void;
}

function SignUp ({ onRequireLogin }: SignUpProps) {
  return (
    <>
      <Header />
      <SignUpForm onRequireLogin={onRequireLogin} />
      <Footer />
    </>
  )
}

export default SignUp;
import Header from '../../components/AuthHeader/Header';
import Form from '../Login';
import Footer from '../../components/AuthFooter/Footer';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default App;

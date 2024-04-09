import Header from "../../components/AuthHeader/Header";
import Footer from "../../components/AuthFooter/Footer";
import Room from './components/Room';

const groups = [
  { id: 1, name: 'Groupe 1' },
  { id: 2, name: 'Groupe 2' },
  { id: 3, name: 'Groupe 3' }
];






function ConversastionList() {
  return (
    <div className="app">
      <Header />
      <Room groups={groups} />
      <Footer />
    </div>
  );
}

export default ConversastionList;

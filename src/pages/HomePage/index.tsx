import { Container } from '@mui/material';

import Header from '../../components/CategoriesHeader/Header';
import NotifsContainer from './FloatingCategories/NotifsContainer';
import FilterButtons from '../../components/FilterButtons/FilterButtons';
import Footer from '../../components/CategoriesFooter/Footer';

function HomePageComponent() {
  return (
    <>
      <Header />
      <NotifsContainer />
      <Container
        component="footer"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <FilterButtons />
        <Footer />
      </Container>
    </>
  );
}

export default HomePageComponent;

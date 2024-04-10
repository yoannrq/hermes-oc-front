import { Container } from '@mui/material';

import Header from '../../components/CategoriesHeader/Header';
import Footer from '../../components/CategoriesFooter/Footer';
import FilterButtons from '../../components/FilterButtons/FilterButtons';
import NotifsContainer from './FloatingCategories/NotifsContainer';

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

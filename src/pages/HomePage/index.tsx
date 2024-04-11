import { Container } from '@mui/material';

import Header from '../../components/CategoriesHeader';
import NotifsContainer from './Components/NotifsContainer';
import FilterButtons from '../../components/FloatingButtons';
import Footer from '../../components/CategoriesFooter';

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

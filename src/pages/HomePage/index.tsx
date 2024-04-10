import { Box } from '@mui/material';

import Header from '../../components/CategoriesHeader/Header';
import Footer from '../../components/CategoriesFooter/Footer';
import FilterButtons from '../../components/FilterButtons/FilterButtons';

function HomePageComponent() {
  return (
    <>
      <Header />
      {/* <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h1>Home Page</h1>
        <p>This is the home page.</p>
      </div> */}
      <Box
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
      </Box>
    </>
  );
}

export default HomePageComponent;

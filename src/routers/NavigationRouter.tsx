import HomeRouter from '../routers/HomeRouter';
import { Container } from '@mui/material';

// import RedirectTo from './utils/RedirectTo';
import HomeLayout from '../layouts/HomeLayout/HomeLayout';
import ConversastionList from '../pages/ConversationList';
import TeamsList from '../pages/TeamsList';


export default [
  {
    path: 'home',
    element: <HomeLayout />,
    children: HomeRouter,
  },
  {
    path: 'patients',
    element: 
    <Container
      component="main"
      className="TEST"
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        padding: 0,
        margin: 'auto',
        overflow: 'hidden',
      }}
    >
    <h1>Patients</h1>
    </Container>
  },
  {
    path: 'teams',
    // element: 
    // <Container
    //   component="main"
    //   className="TEST"
    //   maxWidth="lg"
    //   sx={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     height: '100%',
    //     width: '100%',
    //     padding: 0,
    //     margin: 'auto',
    //     overflow: 'hidden',
    //   }}
    // >
    // <h1>Équipes</h1>
    // </Container>

    element: <TeamsList />,
  },
  {
    path: 'private',
    element: <ConversastionList />,
  },
];


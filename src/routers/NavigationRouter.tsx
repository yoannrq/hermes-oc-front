import HomeRouter from '../routers/HomeRouter';

// import RedirectTo from './utils/RedirectTo';
import HomeLayout from '../layouts/HomeLayout/HomeLayout';
import { Button } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';

function Conversation({ i }: { i: number }) {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(`/conversations/private/${i}`)}>
      Conversation {i}
    </Button>
  );
}

export default [
  {
    path: 'home',
    element: <HomeLayout />,
    children: HomeRouter,
  },
  {
    path: 'teams',
    element: <h1>Equipe</h1>,
  },
  {
    path: 'private',
    element: (
      <>
        <Conversation i={1} />
        <Conversation i={2} />
        <Conversation i={3} />
        <Conversation i={4} />
      </>
    ),
  },
  {
    path: 'patients',
    element: <h1>Patients</h1>,
  },
];

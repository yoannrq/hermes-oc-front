import { Outlet, useLocation, useOutletContext } from 'react-router-dom';

import FilterButtons from '../../components/FloatingButtons';

export default function HomeContainer() {
  const location = useLocation();

  console.log('location : ', location);
  console.log('outletContext: ', useOutletContext());
  return (
    <>
      <Outlet />
      <FilterButtons />
    </>
  );
}

import { Outlet } from 'react-router-dom';
import Navs from './Navs';
import AppTitle from './AppTitle';

const MainLayout = () => {
  return (
    <div>
      <Navs />
      <AppTitle
        Title="Box office"
        Subtitle="Are you looking for an actor or movie"
      />
      <Outlet />
    </div>
  );
};
export default MainLayout;

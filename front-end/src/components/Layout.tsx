import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './Header';

const Layout = () => {
  return (
    <Box>
      <Header />
      <section>
        <Outlet />
      </section>
    </Box>
  );
};

export default Layout;

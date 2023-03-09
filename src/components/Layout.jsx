import { Outlet, Link } from 'react-router-dom';
import { Stack, Container } from '@mui/material';

const Layout = () => {
  return (
    <>
      <Stack
        component="header"
        direction="row"
        alignItems="center"
        p={2}
        sx={{
          possition: 'sticky',
          top: 0,
        }}
      >
        <Container maxWidth="md">
          <Link to="/">Home</Link>
        </Container>
      </Stack>
      <Container maxWidth="md" component="main">
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;

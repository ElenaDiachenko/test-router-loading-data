import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from 'pages/Home';
import Error from 'pages/Error';
import Pokemon from 'pages/Pokemon';
import { Container } from '@mui/material';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Home />} path="/">
      <Route element={<Pokemon />} path="pokemon/:name" />
    </Route>,
  ),
);

function App() {
  return (
    <Container maxWidth="md">
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;

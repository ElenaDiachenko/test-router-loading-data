import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Layout from 'components/Layout';
import Home, { pokemonListLoader } from 'pages/Home';
import Error from 'pages/Error';
import Pokemon, { pokemonLoader } from 'pages/Pokemon';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} path="/">
      <Route
        index
        element={<Home />}
        loader={pokemonListLoader}
        errorElement={<Error />}
      />
      <Route
        element={<Pokemon />}
        loader={pokemonLoader}
        path="pokemon/:name"
      />
    </Route>,
  ),
);

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: 'pokemon/:name',
//         element: <Pokemon />,
//         errorElement: <Error />,
//       },
//     ],
//   },
// ]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

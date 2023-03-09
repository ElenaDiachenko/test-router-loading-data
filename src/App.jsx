import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Layout from 'components/Layout';
import Home, { pokemonLoader } from 'pages/Home';
import Error from 'pages/Error';
import Pokemon from 'pages/Pokemon';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} path="/">
      <Route
        index
        element={<Home />}
        loader={pokemonLoader}
        errorElement={<Error />}
      />
      <Route element={<Pokemon />} path="pokemon/:name" />
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

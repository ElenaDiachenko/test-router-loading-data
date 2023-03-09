import { Suspense } from 'react';
import { Link, useLoaderData, defer, Await } from 'react-router-dom';
import { Grid, Typography, Card, CardContent } from '@mui/material';

const getPokemons = async () => {
  const results = await fetch('https://pokeapi.co/api/v2/pokemon');

  if (!results.ok) throw new Error('Something went wrong!');

  const data = await results.json();
  return data.results;
};
export const pokemonListLoader = async () => {
  return defer({
    pokemons: getPokemons(),
  });
};

const Home = () => {
  const { pokemons } = useLoaderData();
  console.log(pokemons);
  return (
    <Grid container spacing={3} py={2}>
      <Suspense fallback={<h2>Loading ...</h2>}>
        <Await resolve={pokemons}>
          {(resolvedPokemons) => (
            <>
              {resolvedPokemons.map(({ name }) => (
                <Grid item xs={12} sm={4} key={name}>
                  <Link to={`pokemon/${name}`}>
                    <Card
                      sx={{
                        color: 'inherit',
                        background: 'rgb(65 62 62 / 87%)',
                        display: 'flex',
                        justifyContent: 'center',
                        textAlign: 'center',
                        ':hover': {
                          boxShadow: 10,
                        },
                      }}
                    >
                      <CardContent>
                        <Typography variant="h6" component="h3">
                          {name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </>
          )}
        </Await>
      </Suspense>
    </Grid>
  );
};

export default Home;

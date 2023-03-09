import { Link, useLoaderData } from 'react-router-dom';
import { Grid, Typography, Card, CardContent } from '@mui/material';

export const pokemonListLoader = async () => {
  const results = await fetch('https://pokeapi.co/api/v2/pokemon');

  if (!results.ok) throw new Error('Something went wrong!');

  const pokemons = await results.json();
  return { pokemons };
};

const Home = () => {
  const { pokemons } = useLoaderData();
  return (
    <Grid container spacing={3} py={2}>
      {pokemons.results.map(({ name, url }) => (
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
    </Grid>
  );
};

export default Home;

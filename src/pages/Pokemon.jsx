import { Suspense } from 'react';
import { defer, useLoaderData, Await, json } from 'react-router-dom';
import { PokemonItem } from 'components/PokemonItem';
import { Typography } from '@mui/material';

const getPokemon = async (name) => {
  const results = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!results.ok) throw new Error('Something went wrong!');

  const pokemon = await results.json();
  return pokemon;
};

export const pokemonLoader = ({ params }) => {
  return defer({
    pokemon: getPokemon(params.name),
  });
};

const Pokemon = () => {
  const { pokemon } = useLoaderData();
  return (
    <>
      <Typography
        variant="h6"
        component="h1"
        mt={2}
        sx={{
          textAlign: 'center',
        }}
      >
        Pokemon card
      </Typography>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={pokemon}>
          <PokemonItem />
        </Await>
      </Suspense>
    </>
  );
};

export default Pokemon;

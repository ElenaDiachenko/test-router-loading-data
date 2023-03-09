import { useAsyncValue } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';

export const PokemonItem = () => {
  const pokemon = useAsyncValue();
  return (
    <Card
      sx={{
        color: 'inherit',
        background: 'rgb(65 62 62 / 87%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        width: '300px',
        height: '350px',
        margin: ' 16px auto',
      }}
    >
      <CardMedia
        image={pokemon.sprites.front_default}
        component="img"
        alt={pokemon.name}
        title={pokemon.name}
        sx={{ height: '85%' }}
      />
      <CardContent>
        <Typography variant="h6" component="h3">
          {pokemon.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Typography } from '@mui/material';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <Typography
      variant="h6"
      component="h1"
      mt={2}
      sx={{
        textAlign: 'center',
        color: 'red',
      }}
    >
      {error.message || 'Something went wrong!'}
    </Typography>
  );
};

export default Error;

import { Box, Typography } from '@mui/material';
import { useRouteError } from 'react-router-dom';

const GlobalError = () => {
  const error = useRouteError();

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: '50px',
      }}
    >
      <Typography variant="h4" gutterBottom>
        {error.status} {error.name}
      </Typography>

      <Typography variant="body1" gutterBottom>
        {error.message}
      </Typography>

      <Typography variant="body2" sx={{ fontFamily: 'monospace' }} gutterBottom>
        {error.stack}
      </Typography>
    </Box>
  );
};

export default GlobalError;

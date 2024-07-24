import { Box, Typography } from '@mui/material';

const NotFound = () => {
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
      <Typography variant="h4" gutterBottom sx={{ mt: 2 }}>
        404 Not found
      </Typography>
    </Box>
  );
};

export default NotFound;

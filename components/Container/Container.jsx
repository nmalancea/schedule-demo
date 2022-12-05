import PropTypes from 'prop-types';
import { Box, Paper } from '@mui/material';

function Container({ children }) {
  return (
    <Box sx={{ height: '100vh', width: '100%' }}>
      <Paper sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey.400',
      }}
      >
        { children }
      </Paper>
    </Box>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;

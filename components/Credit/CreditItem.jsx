import { Box } from '@mui/material';
import React from 'react';

function CreditItem({ amount, reason, date }) {
  return (
    <Box>
      <p>{amount}</p>
      <p>{reason}</p>
      <p>{date}</p>
    </Box>
  );
}

export default CreditItem;

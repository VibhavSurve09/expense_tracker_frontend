import { Box } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Navbar from '../../components/Navbar';

function Debit() {
  return (
    <Box>
      <Navbar />
      <Container>
        This page shall contain all the graphs and history of debits
      </Container>
    </Box>
  );
}

export default Debit;

import { Box, Button } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
function Credit() {
  const [credit, setCredit] = useState([]);
  useEffect(() => {
    const getCredit = async () => {
      const response = await axios.get(`${process.env.API}/credit`, {
        withCredentials: true,
      });
      const credit = await response.data.json();
      setCredit(credit);
    };
    getCredit();
  }, []);
  console.log(credit);
  return (
    <Box>
      <Navbar />

      <Container>This page shall contain all about credit</Container>
    </Box>
  );
}

export default Credit;

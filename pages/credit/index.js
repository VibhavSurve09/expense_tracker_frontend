import { Box, Button, Grid, Pagination } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import LineChart from '../../components/Charts/LineChart';
import CreditItem from '../../components/Credit/CreditItem';
import Navbar from '../../components/Navbar';

function Credit() {
  const [credit, setCredit] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const getCredit = async () => {
      const response = await axios.get(`${process.env.API}/credit/1`, {
        withCredentials: true,
      });

      setCredit(response.data.data);
    };
    getCredit();
  }, []);
  const change_page = (event, page) => {
    const next_page = '/credit/'; // This would be always true for this page
    router.push(`${next_page}` + page);
  };
  return (
    <Box>
      <Navbar />
      {/* Every page shall show only recent 10  recent credit credits */}
      <Container>
        <Grid
          container
          m={2}
          justifyContent='center'
          direction={'column'}
          alignItems={'center'}
        >
          <Grid item lg={12}>
            <Pagination
              count={10}
              defaultPage={1}
              variant='outlined'
              color='primary'
              siblingCount={2}
              shape='rounded'
              onChange={change_page}
              hideNextButton={true}
              hidePrevButton={true}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Credit;

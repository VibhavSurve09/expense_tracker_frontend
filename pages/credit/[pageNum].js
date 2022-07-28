import { Box, Button, Grid, Skeleton } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CreditItem from '../../components/Credit/CreditItem';
import Navbar from '../../components/Navbar';
function CreditPage() {
  const router = useRouter();
  const { pageNum } = router.query;
  const [credit, setCredit] = useState([]);

  useEffect(() => {
    const getCredit = async () => {
      const response = await axios.get(`${process.env.API}/credit/${pageNum}`, {
        withCredentials: true,
      });

      setCredit(response.data.data);
    };
    if (pageNum) getCredit();
  }, [pageNum]);

  return (
    <Box>
      <Navbar />
      {/* Every page shall show only recent 10  recent credit credits */}
      <Container>
        {/* Grid container takes 12 columns */}
        <Grid container spacing={2} m={1}>
          {credit.length > 0 ? (
            <>
              {/* In map first we  get the object second we get an index that starts from 0  */}
              {credit.map((c, indx) => {
                return (
                  <Grid item md={4} xs={12} lg={6} key={indx}>
                    <CreditItem
                      amount={c.credit_amount}
                      reason={c.reason}
                      date={c.transaction_date}
                      id={c.id}
                    />
                  </Grid>
                );
              })}
            </>
          ) : (
            <> Skeleton</>
          )}
        </Grid>
      </Container>
    </Box>
  );
}

export default CreditPage;

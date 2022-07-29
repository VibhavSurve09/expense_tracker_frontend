import { Box, Button, Grid, Pagination, Skeleton } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CreditItem from '../../components/Credit/CreditItem';
import Navbar from '../../components/Navbar';
import userCreditStore from '../../store/usecreditFavStore';
function CreditPage() {
  const router = useRouter();
  const { pageNum } = router.query;
  const pageNumInt = parseInt(pageNum);
  const [credit, setCredit] = useState([]);
  const { favCredits } = userCreditStore((state) => ({
    favCredits: state.favCredits,
  }));
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
                //! Expensive operation
                // let find =
                //   favCredits.filter((cred) => cred.id == c.id).length > 0;
                return (
                  <Grid item md={4} xs={12} lg={6} key={indx}>
                    <CreditItem
                      amount={c.credit_amount}
                      reason={c.reason}
                      date={c.transaction_date}
                      id={c.id}
                      inFav={false}
                    />
                  </Grid>
                );
              })}
            </>
          ) : (
            <> Skeleton</>
          )}
        </Grid>
        <Pagination
          count={20}
          defaultPage={pageNumInt}
          variant='outlined'
          color='primary'
        />
      </Container>
    </Box>
  );
}

export default CreditPage;

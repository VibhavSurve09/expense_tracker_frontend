import { Box, Button, Pagination } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LineChart from '../../components/Charts/LineChart';
import CreditItem from '../../components/Credit/CreditItem';
import Navbar from '../../components/Navbar';

function Credit() {
  const [credit, setCredit] = useState([]);
  useEffect(() => {
    const getCredit = async () => {
      const response = await axios.get(`${process.env.API}/credit/1`, {
        withCredentials: true,
      });

      setCredit(response.data.data);
    };
    getCredit();
  }, []);

  return (
    <Box>
      <Navbar />
      {/* Every page shall show only recent 10  recent credit credits */}
      <Container>
        {credit.length > 0 ? (
          <>
            <LineChart _chartdata={credit} />
            {/* In map first we  get the object second we get an index that starts from 0  */}
            {credit.map((c, indx) => {
              return (
                <CreditItem
                  key={indx}
                  amount={c.credit_amount}
                  reason={c.reason}
                  date={c.transaction_date}
                />
              );
            })}
          </>
        ) : (
          <>Skeleton</>
        )}

        <Pagination
          count={20}
          defaultPage={1}
          variant='outlined'
          color='primary'
        />
      </Container>
    </Box>
  );
}

export default Credit;

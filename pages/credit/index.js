import { Box, Button } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
      </Container>
    </Box>
  );
}

export default Credit;

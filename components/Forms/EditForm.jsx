import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import React from 'react';

function EditForm({ amount, setAmount, reason, setReason, isCredit, id }) {
  const update = async () => {
    if (isCredit) {
      console.log('Not yet implemented');
    } else {
      let res = await axios.post(
        `${process.env.API}/debit/update`,
        {
          id,
          debit_amount: amount,
          message: reason,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res);
    }
  };
  return (
    <Box>
      <TextField
        id='outlined-basic'
        label='Amount'
        variant='outlined'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <TextField
        id='outlined-basic'
        label='Reason'
        variant='outlined'
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />
      <Button onClick={update}>Submit</Button>
    </Box>
  );
}

export default EditForm;

import { Box, Button, TextField } from '@mui/material';
import React from 'react';

function EditForm({ amount, setAmount, reason, setReason }) {
  const editCredit = () => {
    console.log('Editing');
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
      <Button onClick={editCredit}>Submit</Button>
    </Box>
  );
}

export default EditForm;

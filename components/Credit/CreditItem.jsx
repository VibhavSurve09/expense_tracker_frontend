import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import useUserStore from '../../store/userStore';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import userCreditStore from '../../store/usecreditFavStore';

function CreditItem({ amount, reason, date, id, inFav }) {
  const { userName } = useUserStore((state) => ({
    userName: state.user.userName,
  }));

  const addCreditToFav = userCreditStore((state) => state.addCredit);
  const removeCreditToFav = userCreditStore((state) => state.removeCredit);
  const deleteFromFav = () => {
    removeCreditToFav(id);
  };
  const addToFav = () => {
    let cred = {
      amount,
      reason,
      date,
      id,
    };
    addCreditToFav(cred);
  };
  return (
    <Box>
      <Card>
        <CardHeader
          avatar={<Avatar>{userName[0]}</Avatar>}
          title={reason}
          subheader={date}
          action={
            <Box>
              <IconButton aria-label='edit' color='inherit'>
                <EditIcon />
              </IconButton>
              <IconButton aria-label='delete' color='inherit'>
                <DeleteIcon />
              </IconButton>
            </Box>
          }
        />
        <CardActions>
          {inFav ? (
            <>
              {' '}
              <IconButton color='inherit' onClick={deleteFromFav}>
                <TurnedInIcon />
              </IconButton>
            </>
          ) : (
            <>
              <IconButton color='inherit' onClick={addToFav}>
                <TurnedInNotIcon />
              </IconButton>
            </>
          )}
        </CardActions>
      </Card>
    </Box>
  );
}

export default CreditItem;

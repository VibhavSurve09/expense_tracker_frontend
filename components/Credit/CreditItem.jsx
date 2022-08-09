import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import useUserStore from '../../store/userStore';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import userCreditStore from '../../store/usecreditFavStore';
import axios from 'axios';
import EditCreditModal from './EditCreditModal';

function CreditItem({ amount, reason, date, id, inFav }) {
  const [showEditModal, setShowEditModal] = useState(false);
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
  const deleteCredit = () => {
    axios.delete(`${process.env.API}/credit/delete/${id}`, {
      withCredentials: true,
    });
  };
  const editCreditItem = () => {
    setShowEditModal(true);
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
              <Tooltip title='Edit'>
                <IconButton
                  aria-label='edit'
                  color='inherit'
                  onClick={editCreditItem}
                >
                  <EditIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title='Delete'>
                <IconButton
                  aria-label='delete'
                  color='inherit'
                  onClick={deleteCredit}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
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
      <EditCreditModal
        showModal={showEditModal}
        setShowModal={setShowEditModal}
        amount={amount}
        reason={reason}
      />
    </Box>
  );
}

export default CreditItem;

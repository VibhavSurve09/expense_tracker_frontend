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
import axios from 'axios';
import EditDebitModal from './EditModal';

function DebitItem({ amount, reason, date, id, inFav }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const { userName } = useUserStore((state) => ({
    userName: state.user.userName,
  }));
  const deleteDebitItem = () => {
    axios.delete(`${process.env.API}/debit/delete/${id}`, {
      withCredentials: true,
    });
  };
  const editDebit = () => {
    console.log('Editing..');
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
                  onClick={editDebit}
                >
                  <EditIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title='Delete'>
                <IconButton
                  aria-label='delete'
                  color='inherit'
                  onClick={deleteDebitItem}
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
              <IconButton color='inherit'>
                <TurnedInIcon />
              </IconButton>
            </>
          ) : (
            <>
              <IconButton color='inherit'>
                <TurnedInNotIcon />
              </IconButton>
            </>
          )}
        </CardActions>
      </Card>
      <EditDebitModal
        showModal={showEditModal}
        setShowModal={setShowEditModal}
      />
    </Box>
  );
}

export default DebitItem;

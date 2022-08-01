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

function DebitItem({ amount, reason, date, id, inFav }) {
  const { userName } = useUserStore((state) => ({
    userName: state.user.userName,
  }));

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
    </Box>
  );
}

export default DebitItem;

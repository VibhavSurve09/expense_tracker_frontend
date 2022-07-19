import styled from '@emotion/styled';
import {
  AppBar,
  Avatar,
  Box,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
function Navbar() {
  const StyledToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
  });
  return (
    <Box>
      <AppBar position='static'>
        <StyledToolBar>
          <Typography
            variant='h6'
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Expense Tracker
          </Typography>
          <CreditScoreIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
          {/* This should be first letter of the user */}
          <IconButton>
            <Avatar>V</Avatar>
          </IconButton>
        </StyledToolBar>
      </AppBar>
    </Box>
  );
}

export default Navbar;

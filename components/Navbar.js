//Zustand Ref https://github.com/hiteshchoudhary/Zustand-crash-course/blob/main/src/components/CourseList.jsx
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
import useUserStore from '../store/userStore';
function Navbar() {
  const StyledToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
  });
  const { telegramId } = useUserStore((state) => ({
    telegramId: state.user.telegramId,
  }));
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
          {telegramId ? (
            <>
              <IconButton>
                <Avatar>V</Avatar>
              </IconButton>
            </>
          ) : (
            <>Not logged in</>
          )}
        </StyledToolBar>
      </AppBar>
    </Box>
  );
}

export default Navbar;

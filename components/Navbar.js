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
import MenuIcon from '@mui/icons-material/Menu';
import Head from 'next/head';
import LeftDrawer from './Drawer/LeftDrawer';
import Link from 'next/link';
function Navbar() {
  const StyledToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
  });
  const { telegramId } = useUserStore((state) => ({
    telegramId: state.user.telegramId,
  }));
  const { userName } = useUserStore((state) => ({
    userName: state.user.userName,
  }));
  return (
    <Box>
      <Head>
        <title>Expense Tracker</title>
      </Head>
      <AppBar position='static'>
        <StyledToolBar>
          <LeftDrawer>
            <IconButton color='inherit'>
              <MenuIcon />
            </IconButton>
          </LeftDrawer>
          <Link href={'/'}>
            <Typography
              variant='h6'
              sx={{
                display: { xs: 'none', sm: 'block' },
                flexGrow: 1,
                cursor: 'pointer',
              }}
            >
              Expense Tracker
            </Typography>
          </Link>
          {/* This should be first letter of the user */}
          {telegramId ? (
            <>
              <IconButton color='inherit'>
                <Avatar> {userName[0]}</Avatar>
              </IconButton>
            </>
          ) : (
            <></>
          )}
        </StyledToolBar>
      </AppBar>
    </Box>
  );
}

export default Navbar;

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import useUserStore from '../../store/userStore';
import axios from 'axios';
import { setCookie } from 'cookies-next';
import { FORBIDDEN, Ok, INVALID_CRED } from '../../statusCode';
import { Container } from '@mui/system';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useRouter } from 'next/router';
function Login() {
  const setTelegramId = useUserStore((state) => state.setTelegramId);
  const setTeleUserName = useUserStore((state) => state.setUserName);
  const setEmailAddr = useUserStore((state) => state.setEmailAddr);
  const router = useRouter();
  const [userName, setUsername] = useState('');
  const [error, setError] = useState({ err: false, message: '' });
  const [showEmailOption, setShowEmailOption] = useState(false);
  const [email, setEmail] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      `${process.env.API}/login`,
      {
        uname: userName,
      },
      {
        withCredentials: true,
      }
    );
    if (res.data.status_code === INVALID_CRED) {
      setError({ err: true, message: 'Invalid Credentials' });
    }
    if (res.data.status_code === Ok) {
      if (!res.data.user.email) {
        setShowEmailOption(true);
        return;
      }
      router.push('/');
      setCookie('et_tid', res.data.tid);
      //Set Credentials in local storage
      setTelegramId(res.data.user.tid);
      setTeleUserName(res.data.user.uname);
      setEmailAddr(res.data.user.email);
      setError({ err: false, message: '' });
    }
  };

  const handleLoginWithUpdateEmail = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      `${process.env.API}/update/email`,
      {
        email: email,
      },
      {
        withCredentials: true,
      }
    );
    if (res.status() == FORBIDDEN) {
      return;
    }
    //Set Credentials in local storage
    setEmailAddr(res.data.user.email);
    router.push('/');
  };
  return (
    <Box>
      <Navbar />

      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#1976D2' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Log In
          </Typography>
          <Box component='form' sx={{ mt: 1 }}>
            <TextField
              error={error.err}
              helperText={error.message}
              margin='normal'
              required
              fullWidth
              id='email'
              label='Username'
              name='username'
              autoFocus
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
            ></TextField>
            {showEmailOption ? (
              <>
                {' '}
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='email'
                  label='Email'
                  name='Email'
                  autoFocus
                  value={email}
                  placeholder='Please update your email'
                  onChange={(e) => setEmail(e.target.value)}
                ></TextField>
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleLoginWithUpdateEmail}
                >
                  Log In
                </Button>
              </>
            ) : (
              <></>
            )}
            {!showEmailOption ? (
              <>
                {' '}
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleLogin}
                >
                  Log In
                </Button>
              </>
            ) : (
              <></>
            )}

            <Grid container>
              <Grid item xs>
                <Link>{"Don't have a account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Login;

import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  Box,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';

import { LoadingButton } from '@mui/lab';

import {
  clearAuth,
  clearValidation,
  setAuth,
  login,
} from '@/redux/auth/actions';

import {
  getAuthBranch,
  selectAuthData,
} from '@/redux/auth/selectors';

import PageLayout from '@/ui/PageLayout';

import routes from '@/constants/routes';
import Container from '@/ui/Container';
import Header from '@/components/Header';

const Login = () => {
  const dispatch = useDispatch();

  const { isLoading, errors } = useSelector(getAuthBranch);

  const { communication } = useSelector(selectAuthData);

  useEffect(() => () => {
    dispatch(clearAuth());
  }, []);

  const handleChange = ({ target }) => {
    dispatch(clearValidation());

    dispatch(setAuth({
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(login());
  };

  const {
    communication: [communicationError] = [null],
  } = errors || {};

  return (
    <>
      <Header />
      <PageLayout>
        <Container>
          <Typography component="h1" variant="h5">
            Вход
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="communication"
                  label="Почта/телефон"
                  value={communication}
                  onChange={handleChange}
                  error={Boolean(communicationError)}
                  helperText={communicationError}
                  fullWidth
                  required
                />
              </Grid>
            </Grid>
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              loading={isLoading}
              disabled={isLoading}
            >
              Войти
            </LoadingButton>
            <Grid container>
              <Grid item>
                <Link
                  component={NavLink}
                  to={routes.registration}
                  variant="body2"
                >
                  Нет аккаунта? Зарегистрируйтесь
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </PageLayout>
    </>
  );
};

export default Login;

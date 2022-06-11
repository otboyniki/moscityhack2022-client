import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

import { LoadingButton } from '@mui/lab';

import {
  getAuthBranch,
  selectAuthData,
} from '@/redux/auth/selectors';

import {
  clearAuth,
  clearValidation,
  setAuth,
  quickRegister,
} from '@/redux/auth/actions';

import PageLayout from '@/components/PageLayout';

const QuickRegistration = () => {
  const dispatch = useDispatch();

  const { isLoading, errors } = useSelector(getAuthBranch);

  const {
    firstName,
    communication,
  } = useSelector(selectAuthData);

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

    dispatch(quickRegister());
  };

  const {
    firstName: [firstNameError] = [null],
    communication: [communicationError] = [null],
  } = errors || {};

  return (
    <PageLayout>
      <Container maxWidth="sm">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Быстрая регистрация
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
                  name="firstName"
                  label="Имя"
                  value={firstName}
                  onChange={handleChange}
                  error={Boolean(firstNameError)}
                  helperText={firstNameError}
                  fullWidth
                  required
                />
              </Grid>
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
              Зарегистрироваться
            </LoadingButton>
          </Box>
        </Box>
      </Container>
    </PageLayout>
  );
};

export default QuickRegistration;

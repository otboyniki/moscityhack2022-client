import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';

import {
  Box,
  TextField,
  Typography,
} from '@mui/material';

import {
  clearAuth,
  clearValidation,
  setAuth,
  confirmRegistration,
} from '@/redux/auth/actions';

import {
  getAuthBranch,
  selectAuthData,
} from '@/redux/auth/selectors';

import Header from '@/components/Header';

import PageLayout from '@/ui/PageLayout';
import Container from '@/ui/Container';

import getQueryParams from '@/helpers/getQueryParams';

import routes from '@/constants/routes';

const RegistrationConfirm = () => {
  const dispatch = useDispatch();

  const { isLoading, errors } = useSelector(getAuthBranch);

  const { code } = useSelector(selectAuthData);

  useEffect(() => () => {
    dispatch(clearAuth());
  }, []);

  const {
    id,
  } = getQueryParams();

  if (!id) {
    return (
      <Redirect to={routes.main} />
    );
  }

  const handleChange = ({ target }) => {
    dispatch(clearValidation());

    dispatch(setAuth({
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(confirmRegistration());
  };

  const {
    code: [codeError] = [null],
  } = errors || {};

  return (
    <>
      <Header />
      <PageLayout>
        <Container>
          <Typography component="h1" variant="h5">
            Подтвердите регистрацию
          </Typography>
          <Typography variant="body1">
            К вам на почту/телефон должен прийти код. Введите его
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              name="code"
              label="Код"
              value={code}
              onChange={handleChange}
              error={Boolean(codeError)}
              helperText={codeError}
              margin="normal"
              fullWidth
              required
              placeholder="Пожалуйста, вводите 7373"
            />
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              loading={isLoading}
              disabled={isLoading}
            >
              Подтвердить
            </LoadingButton>
          </Box>
        </Container>
      </PageLayout>
    </>
  );
};

export default RegistrationConfirm;

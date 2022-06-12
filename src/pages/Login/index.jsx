import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button } from '@mui/material';
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

import SignLayout from '@/ui/SignLayout';

import routes from '@/constants/routes';

import S from './styles';

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
    <SignLayout showBackButton>
      <S.LoginWrapper>
        <div>
          <S.Title>
            Вход
          </S.Title>
          <S.FormBox
            component="form"
            onSubmit={handleSubmit}
            noValidate
          >
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
            <LoadingButton
              type="submit"
              variant="contained"
              loading={isLoading}
              disabled={isLoading}
              color="error"
            >
              Войти
            </LoadingButton>
          </S.FormBox>
        </div>
      </S.LoginWrapper>

      <S.RegistrationWrapper>
        <div>
          <S.Title>
            Еще не с нами?
          </S.Title>
          <Button
            component={NavLink}
            to={routes.registration}
            variant="outlined"
            color="secondary"
            size="large"
            fullWidth
          >
            Зарегистрироваться
          </Button>
          <S.RegSubtitle>
            Регистрируйтесь быстрее!
          </S.RegSubtitle>
        </div>
      </S.RegistrationWrapper>
    </SignLayout>
  );
};

export default Login;

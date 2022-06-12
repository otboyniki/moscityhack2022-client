import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

import SignLayout from '@/ui/SignLayout';

import S from './styles';

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
    <SignLayout>
      <S.RegistrationWrapper>
        <S.Title>
          Быстрая регистрация
        </S.Title>
        <S.FormBox
          component="form"
          onSubmit={handleSubmit}
          noValidate
        >
          <S.TextFieldWrapper
            name="firstName"
            label="Имя"
            value={firstName}
            onChange={handleChange}
            error={Boolean(firstNameError)}
            helperText={firstNameError}
            fullWidth
            required
          />
          <S.TextFieldWrapper
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
            fullWidth
            variant="contained"
            loading={isLoading}
            disabled={isLoading}
          >
            Зарегистрироваться
          </LoadingButton>
        </S.FormBox>
      </S.RegistrationWrapper>
    </SignLayout>
  );
};

export default QuickRegistration;

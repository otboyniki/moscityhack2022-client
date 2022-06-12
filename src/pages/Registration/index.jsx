import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import {
  Box,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from '@mui/material';

import { LoadingButton } from '@mui/lab';

import {
  clearAuth,
  clearValidation,
  setAuth,
  register,
} from '@/redux/auth/actions';

import { getAuthBranch, selectAuthData } from '@/redux/auth/selectors';

import PageLayout from '@/ui/PageLayout';

import routes from '@/constants/routes';
import { UserRoles } from '@/constants/enums';

import S from './styles';

const Registration = () => {
  const dispatch = useDispatch();

  const { isLoading, errors } = useSelector(getAuthBranch);

  const {
    firstName,
    lastName,
    email,
    type,
    companyName,
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

    dispatch(register());
  };

  const {
    firstName: [firstNameError] = [null],
    lastName: [lastNameError] = [null],
    email: [emailError] = [null],
    companyName: [companyNameError] = [null],
  } = errors || {};

  return (
    <S.DarkBackground>
      <PageLayout>
        <S.FormContainer>
          <Button
            component={NavLink}
            to={routes.main}
            variant="outlined"
            startIcon={<ArrowBackIcon />}
          >
            Вернуться на главную
          </Button>
          <S.FullWrapper>
            <S.LoginWrapper>
              <div>
                <S.RegTitle>
                  Уже были у нас?
                </S.RegTitle>
                <Button
                  component={NavLink}
                  to={routes.login}
                  variant="outlined"
                  color="secondary"
                  size="large"
                  fullWidth
                >
                  Войти
                </Button>
                <S.RegSubtitle>
                  С возвращением!
                </S.RegSubtitle>
              </div>
            </S.LoginWrapper>
            <S.RegistrationWrapper>
              <div>
                <S.RegTitle>
                  Регистрация
                </S.RegTitle>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div>
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
                      name="lastName"
                      label="Фамилия"
                      value={lastName}
                      onChange={handleChange}
                      error={Boolean(lastNameError)}
                      helperText={lastNameError}
                      fullWidth
                      required
                    />
                  </div>
                  <S.TextFieldWrapper
                    name="email"
                    label="Почта"
                    value={email}
                    onChange={handleChange}
                    error={Boolean(emailError)}
                    helperText={emailError}
                    fullWidth
                    required
                  />

                  <S.FormControlWrapper fullWidth>
                    <InputLabel id="type">
                      Роль
                    </InputLabel>
                    <Select
                      labelId="type"
                      name="type"
                      label="Роль"
                      value={type}
                      onChange={handleChange}
                    >
                      <MenuItem value={UserRoles.Volunteer}>Волонтер</MenuItem>
                      <MenuItem value={UserRoles.Organizer}>Организатор</MenuItem>
                    </Select>
                  </S.FormControlWrapper>
                  {type === UserRoles.Organizer && (
                  <S.TextFieldWrapper
                    name="companyName"
                    label="Название организации"
                    value={companyName}
                    onChange={handleChange}
                    error={Boolean(companyNameError)}
                    helperText={companyNameError}
                    fullWidth
                    required
                  />
                  )}
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
              </div>
            </S.RegistrationWrapper>
          </S.FullWrapper>
        </S.FormContainer>
      </PageLayout>
    </S.DarkBackground>
  );
};

export default Registration;

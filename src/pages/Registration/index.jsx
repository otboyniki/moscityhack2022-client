import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';

import { LoadingButton } from '@mui/lab';

import {
  clearAuth,
  clearValidation,
  setAuth,
  register,
} from '@/redux/auth/actions';

import { getAuthBranch, selectAuthData } from '@/redux/auth/selectors';

import Header from '@/components/Header';

import PageLayout from '@/ui/PageLayout';
import Container from '@/ui/Container';

import routes from '@/constants/routes';
import { UserRoles } from '@/constants/enums';

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
    <>
      <Header />
      <PageLayout>
        <Container>
          <Typography component="h1" variant="h5">
            Регистрация
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
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
              <Grid item xs={12} sm={6}>
                <TextField
                  name="lastName"
                  label="Фамилия"
                  value={lastName}
                  onChange={handleChange}
                  error={Boolean(lastNameError)}
                  helperText={lastNameError}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  label="Почта"
                  value={email}
                  onChange={handleChange}
                  error={Boolean(emailError)}
                  helperText={emailError}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
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
                </FormControl>
              </Grid>
              {type === UserRoles.Organizer && (
              <Grid item xs={12}>
                <TextField
                  name="companyName"
                  label="Название организации"
                  value={companyName}
                  onChange={handleChange}
                  error={Boolean(companyNameError)}
                  helperText={companyNameError}
                  fullWidth
                  required
                />
              </Grid>
              )}
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
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  component={NavLink}
                  to={routes.login}
                  variant="body2"
                >
                  Уже есть аккаунт? Войдите
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </PageLayout>
    </>
  );
};

export default Registration;

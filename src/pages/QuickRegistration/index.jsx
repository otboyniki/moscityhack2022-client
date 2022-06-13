import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';

import { Typography } from '@mui/material';
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

import { getEvent } from '@/redux/event/actions';
import { getEventBranch } from '@/redux/event/selectors';

import SignLayout from '@/ui/SignLayout';
import PageLoader from '@/ui/PageLoader';

import getQueryParams from '@/helpers/getQueryParams';

import routes from '@/constants/routes';
import { BASE_URL } from '@/constants/env';

import S from './styles';

const QuickRegistration = () => {
  const dispatch = useDispatch();

  const { isLoading, errors } = useSelector(getAuthBranch);

  const {
    firstName,
    communication,
  } = useSelector(selectAuthData);

  const { data } = useSelector(getEventBranch);

  const {
    eventId,
    specializationId,
  } = getQueryParams();

  useEffect(() => {
    if (eventId && specializationId) {
      dispatch(getEvent({ id: eventId }));
    }
  }, []);

  useEffect(() => () => {
    dispatch(clearAuth());
  }, []);

  if (!eventId || !specializationId) {
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
        {!data && (
          <PageLoader />
        )}
        {data && (
          <S.Content>
            <S.Event>
              <S.Preview>
                <img
                  alt="preview"
                  src={`${BASE_URL}/files/${data.previewId}`}
                />
              </S.Preview>
              <S.Block>
                <Typography variant="subtitle2">
                  Организатор
                </Typography>
                <Typography variant="body2">
                  {data.companyName}
                </Typography>
              </S.Block>
              <S.Block>
                <Typography variant="subtitle2">
                  Вид деятельности / Сфера / Направление
                </Typography>
                <Typography variant="body2">
                  {data.activityName}
                </Typography>
              </S.Block>
              <S.Block>
                <Typography variant="subtitle2">
                  Волонтеров
                </Typography>
                <Typography variant="body2">
                  {data.totalParticipants}
                  {' '}
                  из
                  {' '}
                  {data.maxVolunteersNumber}
                </Typography>
              </S.Block>
            </S.Event>
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
          </S.Content>
        )}

      </S.RegistrationWrapper>
    </SignLayout>
  );
};

export default QuickRegistration;

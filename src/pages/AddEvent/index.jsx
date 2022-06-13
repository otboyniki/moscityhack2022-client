import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { Redirect } from 'react-router-dom';

import { getActivitiesBranch } from '@/redux/activities/selectors';
import { getActivities } from '@/redux/activities/actions';
import { getUserBranch } from '@/redux/user/selectors';

import Header from '@/components/Header';
import AddEventForm from '@/components/AddEventForm';

import Container from '@/ui/Container';
import PageLayout from '@/ui/PageLayout';
import PageLoader from '@/ui/PageLoader';

import { UserRoles } from '@/constants/enums';
import routes from '@/constants/routes';

import S from './styles';

const AddEvent = () => {
  const dispatch = useDispatch();

  const { items: activities } = useSelector(getActivitiesBranch);
  const { profileType } = useSelector(getUserBranch);

  useEffect(() => {
    dispatch(getActivities());
  }, []);

  if (profileType !== UserRoles.Organizer) {
    return (
      <Redirect to={routes.main} />
    );
  }

  if (!activities) {
    return (
      <PageLayout>
        <Container>
          <PageLoader />
        </Container>
      </PageLayout>
    );
  }

  return (
    <>
      <Header />
      <PageLayout>
        <Container>
          <S.Title>
            <Typography component="h1" variant="h5">
              Добавьте свое событие
            </Typography>
          </S.Title>
          <AddEventForm />
        </Container>
      </PageLayout>
    </>
  );
};

export default AddEvent;

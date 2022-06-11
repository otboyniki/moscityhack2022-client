import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';

import { getActivities } from '@/redux/activities/actions';
import { getActivitiesBranch } from '@/redux/activities/selectors';

import AddStoryForm from '@/components/AddStoryForm';
import Header from '@/components/Header';

import Container from '@/ui/Container';
import PageLoader from '@/ui/PageLoader';
import PageLayout from '@/ui/PageLayout';

import S from './styles';

const AddStory = () => {
  const dispatch = useDispatch();

  const { items: activities } = useSelector(getActivitiesBranch);

  useEffect(() => {
    dispatch(getActivities());
  }, []);

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
              Расскажите свою историю
            </Typography>
          </S.Title>
          <AddStoryForm />
        </Container>
      </PageLayout>
    </>
  );
};

export default AddStory;

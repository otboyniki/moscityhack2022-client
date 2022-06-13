import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';

import { NavLink } from 'react-router-dom';
import { getEvents } from '@/redux/events/actions';
import { getEventsBranch } from '@/redux/events/selectors';
import { getMainEventsReviews } from '@/redux/main/actions';
import { getMainBranch } from '@/redux/main/selectors';
import { getStories } from '@/redux/stories/actions';
import { getStoriesBranch } from '@/redux/stories/selectors';
import { getUserBranch } from '@/redux/user/selectors';

import Header from '@/components/Header';
import StoryMainList from '@/components/StoryMainList';
import EventsList from '@/components/EventsList';
import ReviewsList from '@/components/ReviewsList';

import Title from '@/ui/Title';
import Container from '@/ui/Container';
import PageLayout from '@/ui/PageLayout';
import PageLoader from '@/ui/PageLoader';

import routes from '@/constants/routes';
import { UserRoles } from '@/constants/enums';

import S from './styles';

const Main = () => {
  const dispatch = useDispatch();

  const { profileType } = useSelector(getUserBranch);
  const { data: events } = useSelector(getEventsBranch);
  const { reviews } = useSelector(getMainBranch);
  const { items: stories } = useSelector(getStoriesBranch);

  useEffect(() => {
    dispatch(getEvents({
      isArchived: false,
    }));

    dispatch(getMainEventsReviews());

    dispatch(getStories());
  }, []);

  return (
    <>
      <Header />
      <PageLayout>
        <Container>
          <S.Subtitle>
            <Title>
              Ближайшие события
            </Title>
            {profileType === UserRoles.Organizer && (
              <Button
                component={NavLink}
                to={routes.addEvent}
                variant="contained"
              >
                Добавить событие
              </Button>
            )}
          </S.Subtitle>
          {!events && (
            <PageLoader />
          )}
          {events && (
            <EventsList eventsPerLine={3} />
          )}
        </Container>

        <S.StoriesSection>
          <S.StoriesSectionContent>
            <S.Subtitle>
              <Title>
                Наши истории
              </Title>
              <Button
                component={NavLink}
                to={routes.addStory}
                variant="contained"
              >
                Добавить историю
              </Button>
            </S.Subtitle>
            {!stories && (
              <PageLoader />
            )}
            {stories && (
              <StoryMainList />
            )}
          </S.StoriesSectionContent>
        </S.StoriesSection>

        <Container>
          <S.Subtitle>
            <Title>
              Отзывы на наши мероприятия
            </Title>
          </S.Subtitle>
          {!reviews && (
            <PageLoader />
          )}
          {reviews && (
            <ReviewsList items={reviews} />
          )}
        </Container>
      </PageLayout>
    </>
  );
};

export default Main;

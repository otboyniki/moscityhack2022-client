import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import { useLocation, NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

import { getEventsBranch } from '@/redux/events/selectors';
import { clearEvents, getEvents } from '@/redux/events/actions';
import { getActivities } from '@/redux/activities/actions';
import { getUserBranch } from '@/redux/user/selectors';

import replaceUrl from '@/helpers/replaceUrl';

import Header from '@/components/Header';
import EventsFilter from '@/components/EventsFilter';
import EventsList from '@/components/EventsList';

import Container from '@/ui/Container';
import PageLayout from '@/ui/PageLayout';
import PageLoader from '@/ui/PageLoader';
import Title from '@/ui/Title';

import routes from '@/constants/routes';
import { UserRoles } from '@/constants/enums';

import { demapFilter, mapFilter } from './helpers';

import S from './styles';

const Events = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  const filter = useMemo(() => (
    demapFilter(queryString.parse(location.search, {
      parseBooleans: true,
    }))
  ), [location]);

  const { data: events } = useSelector(getEventsBranch);
  const { profileType } = useSelector(getUserBranch);

  useEffect(() => {
    dispatch(getActivities());
  }, []);

  useEffect(() => {
    dispatch(getEvents(filter));
  }, [filter]);

  useEffect(() => () => {
    dispatch(clearEvents());
  }, []);

  const setFilter = (value) => {
    replaceUrl(mapFilter({
      ...filter,
      ...value,
    }));
  };

  const clearFilter = () => {
    replaceUrl({});
  };

  return (
    <>
      <Header />
      <PageLayout>
        <Container>
          <S.Content>
            <S.Filter>
              <EventsFilter
                filter={filter}
                onChange={setFilter}
                onClear={clearFilter}
              />
            </S.Filter>
            <S.List>
              <S.Title>
                <Title>
                  Список событий
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
              </S.Title>
              {!events && (
                <PageLoader />
              )}
              {events && (
                <EventsList eventsPerLine={2} />
              )}
            </S.List>
          </S.Content>
        </Container>
      </PageLayout>
    </>
  );
};

export default Events;

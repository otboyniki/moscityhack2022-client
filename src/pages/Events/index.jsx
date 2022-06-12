import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import { useLocation, NavLink } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

import { getEventsBranch } from '@/redux/events/selectors';
import { clearEvents, getEvents } from '@/redux/events/actions';
import { getActivities } from '@/redux/activities/actions';

import replaceUrl from '@/helpers/replaceUrl';

import Header from '@/components/Header';
import EventsFilter from '@/components/EventsFilter';
import EventsList from '@/components/EventsList';

import Container from '@/ui/Container';
import PageLayout from '@/ui/PageLayout';
import PageLoader from '@/ui/PageLoader';

import { demapFilter, mapFilter } from './helpers';

import S from './styles';
import routes from '@/constants/routes';

const Events = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  const filter = useMemo(() => (
    demapFilter(queryString.parse(location.search, {
      parseBooleans: true,
    }))
  ), [location]);

  const { data: events } = useSelector(getEventsBranch);

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
                <Typography component="h1" variant="h5">
                  Список событий
                </Typography>
                <Button
                  component={NavLink}
                  to={routes.addEvent}
                  variant="contained"
                >
                  Добавить событие
                </Button>
              </S.Title>
              {!events && (
                <PageLoader />
              )}
              {events && (
                <EventsList />
              )}
            </S.List>
          </S.Content>
        </Container>
      </PageLayout>
    </>
  );
};

export default Events;

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';

import { getEvent } from '@/redux/event/actions';
import { getEventBranch } from '@/redux/event/selectors';

import formatDate from '@/helpers/formatDate';

import Header from '@/components/Header';
import EventSpecializations from '@/components/EventSpecializations';

import Container from '@/ui/Container';
import PageLayout from '@/ui/PageLayout';
import PageLoader from '@/ui/PageLoader';

import { BASE_URL } from '@/constants/env';

import EventPreviewTemplate from '@/assets/event_preview_template.png';

import S from './styles';

const Event = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    data,
  } = useSelector(getEventBranch);

  useEffect(() => {
    dispatch(getEvent({ id }));
  }, []);

  const {
    title,
    companyName,
    activityName,
    totalParticipants,
    maxVolunteersNumber,
    previewId,
    description,
    recruitment,
    meeting,
    locations,
    specializations,
  } = data || {};

  return (
    <>
      <Header />
      <PageLayout>
        <Container>
          {!data && (
            <PageLoader />
          )}
          {data && (
            <div>
              <S.Sections>
                <S.Section>
                  <S.Preview>
                    <img
                      alt="preview"
                      src={previewId ? `${BASE_URL}/files/${previewId}` : EventPreviewTemplate}
                    />
                  </S.Preview>
                  <S.Block>
                    <Typography variant="subtitle2">
                      Организатор
                    </Typography>
                    <Typography variant="body2">
                      {companyName}
                    </Typography>
                  </S.Block>
                  <S.Block>
                    <Typography variant="subtitle2">
                      Вид деятельности / Сфера / Направление
                    </Typography>
                    <Typography variant="body2">
                      {activityName}
                    </Typography>
                  </S.Block>
                  <S.Block>
                    <Typography variant="subtitle2">
                      Волонтеров
                    </Typography>
                    <Typography variant="body2">
                      {totalParticipants}
                      {' '}
                      из
                      {' '}
                      {maxVolunteersNumber}
                    </Typography>
                  </S.Block>
                </S.Section>
                <S.Section>
                  <S.Title>
                    <Typography variant="h4">
                      {title}
                    </Typography>
                  </S.Title>
                  <S.Block>
                    <Typography variant="subtitle2">
                      Общее описание функционала / задачи
                    </Typography>
                    <Typography variant="body2">
                      {description}
                    </Typography>
                  </S.Block>
                  <S.Block>
                    <Typography variant="subtitle2">
                      Даты набора
                    </Typography>
                    <Typography variant="body2">
                      {recruitment && (
                        <>
                          {formatDate(recruitment.since)}
                          {' '}
                          -
                          {' '}
                          {formatDate(recruitment.until)}
                        </>
                      )}
                      {!recruitment && 'Без ограничений'}
                    </Typography>
                  </S.Block>
                  <S.Block>
                    <Typography variant="subtitle2">
                      Даты проведения
                    </Typography>
                    <Typography variant="body2">
                      {formatDate(meeting.since)}
                      {' '}
                      -
                      {' '}
                      {formatDate(meeting.until)}
                    </Typography>
                  </S.Block>
                  <S.Block>
                    <Typography variant="subtitle2">
                      Место проведения
                    </Typography>
                    <Typography variant="body2">
                      {locations ? locations.map(({ stringLocation }) => stringLocation).join(', ') : '-'}
                    </Typography>
                  </S.Block>
                </S.Section>
              </S.Sections>
              {specializations && specializations.length > 0 && (
                <EventSpecializations />
              )}
            </div>
          )}
        </Container>
      </PageLayout>
    </>
  );
};

export default Event;

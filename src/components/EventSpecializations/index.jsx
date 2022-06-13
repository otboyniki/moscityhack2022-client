import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';

import { LoadingButton } from '@mui/lab';
import { NavLink } from 'react-router-dom';

import { joinEvent, setActiveSpecialization } from '@/redux/event/actions';
import { getEventBranch } from '@/redux/event/selectors';
import { getAuthBranch } from '@/redux/auth/selectors';

import routes from '@/constants/routes';

import S from './styles';

const EventSpecializations = () => {
  const { isAuthorized } = useSelector(getAuthBranch);

  const { data, isToggling, activeSpecialization } = useSelector(getEventBranch);

  const dispatch = useDispatch();

  const handleClick = ({ id, isParticipant }) => {
    dispatch(joinEvent({
      eventId: data.id,
      specializationId: id,
      isParticipant,
    }));
  };

  const handleChangeActiveSpecialization = (_, id) => {
    dispatch(setActiveSpecialization({
      id,
    }));
  };

  return (
    <S.Container>
      <S.Title>
        <Typography variant="h5">
          Вакансии
        </Typography>
      </S.Title>
      <S.Tabs>
        <Tabs
          orientation="vertical"
          value={activeSpecialization}
          onChange={handleChangeActiveSpecialization}
        >
          {data.specializations.map(({ id, title }) => (
            <Tab
              key={id}
              label={title}
            />
          ))}
        </Tabs>
        {data.specializations.map(({
          id,
          description,
          requirements,
          totalParticipants,
          maxVolunteersNumber,
          ages,
          isOnline,
          isParticipant,
        }, index) => (
          <div
            key={id}
            hidden={activeSpecialization !== index}
          >
            {activeSpecialization === index && (
              <S.Tab>
                <S.Block>
                  <Typography variant="subtitle2">
                    Функционал вакансии
                  </Typography>
                  <Typography variant="body2">
                    {description}
                  </Typography>
                </S.Block>
                <S.Block>
                  <Typography variant="subtitle2">
                    Требования
                  </Typography>
                  <Typography variant="body2">
                    {requirements}
                  </Typography>
                </S.Block>
                <S.Block>
                  <Typography variant="subtitle2">
                    Возрастные ограничения
                  </Typography>
                  {ages && (
                    <Typography variant="body2">
                      от
                      {' '}
                      {ages.from}
                      {' '}
                      до
                      {' '}
                      {ages.to}
                    </Typography>
                  )}
                  {!ages && (
                    <Typography>
                      Любой
                    </Typography>
                  )}
                </S.Block>
                <S.Block>
                  <Typography variant="subtitle2">
                    Формат события
                  </Typography>
                  <Typography variant="body2">
                    {isOnline ? 'Онлайн' : 'Оффлайн'}
                  </Typography>
                </S.Block>
                <S.Block>
                  <Typography variant="subtitle2">
                    Число мест
                  </Typography>
                  <Typography variant="body2">
                    Набрано
                    {' '}
                    {totalParticipants}
                    {' '}
                    из
                    {' '}
                    {maxVolunteersNumber}
                  </Typography>
                </S.Block>
                {!isAuthorized && (
                  <Button
                    component={NavLink}
                    to={`${routes.quickRegistration}?eventId=${data.id}&specializationId=${id}`}
                    variant="contained"
                  >
                    Участвовать
                  </Button>
                )}
                {isAuthorized && (
                  <LoadingButton
                    variant="contained"
                    onClick={() => handleClick({ id, isParticipant })}
                    loading={isToggling}
                    disabled={isToggling}
                  >
                    {isParticipant ? 'Отказаться от участия' : 'Участвовать'}
                  </LoadingButton>
                )}
              </S.Tab>
            )}
          </div>
        ))}
      </S.Tabs>
    </S.Container>
  );
};

export default EventSpecializations;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import formatDate from '@/helpers/formatDate';

import routes from '@/constants/routes';

import S from './styles';

const EventPreview = (props) => {
  const {
    title,
    locations,
    meeting = {},
  } = props;

  return (
    <S.PreviewCard>
      <Link component={NavLink} to={routes.main} underline="none">
        <S.Image src="https://pgmcpskov.ru/media/thumbs/article/2021/03/skrinshot27-07-2018135630.jpg.0x1000_q85.jpg" />
        <S.Text>
          <S.Title>
            {title}
          </S.Title>
          <S.Description>
            <LocationOnIcon />
            {locations.map(({ stringLocation }) => stringLocation).join(', ')}
          </S.Description>
          <S.Description>
            <CalendarMonthIcon />
            {formatDate(meeting.since)}
            {' '}
            -
            {' '}
            {formatDate(meeting.until)}
          </S.Description>
        </S.Text>
      </Link>
    </S.PreviewCard>
  );
};

export default EventPreview;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import formatDate from '@/helpers/formatDate';

import { BASE_URL } from '@/constants/env';

import S from './styles';

const EventPreview = (props) => {
  const {
    id,
    title,
    locations,
    meeting = {},
    previewId,
  } = props;

  return (
    <S.PreviewCard>
      <Link component={NavLink} to={`/events/${id}`} underline="none">
        <S.Image src={`${BASE_URL}/files/${previewId}`} />
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

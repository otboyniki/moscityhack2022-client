import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

import formatDate from '@/helpers/formatDate';

import { BASE_URL } from '@/constants/env';

import S from './styles';
import routes from '@/constants/routes';

const ReviewPreview = ({
  text,
  avatarId,
  username,
  createdAt,
  goalComplianceRate,
  eventSummary,
}) => (
  <S.ReviewPreviewCard>
    <S.ReviewHeader>
      <S.HeaderLeft>
        <Avatar
          sx={{ bgcolor: '#ff8e3c', width: 56, height: 56 }}
          alt={username}
          src={`${BASE_URL}/files/${avatarId || ''}`}
        />
        <S.ReviewInfo>
          <S.UserName>{username}</S.UserName>
          <div>{formatDate(createdAt)}</div>
        </S.ReviewInfo>
      </S.HeaderLeft>
      <S.Rating>
        Рейтинг:
        {' '}
        {goalComplianceRate}
      </S.Rating>
    </S.ReviewHeader>
    Про
    {' '}
    <S.EventLink
      component={NavLink}
      to={`${routes.events}/${eventSummary.eventId}`}
    >
      {eventSummary.title}
    </S.EventLink>
    <S.ReviewText>
      {text}
    </S.ReviewText>
  </S.ReviewPreviewCard>
);

export default ReviewPreview;

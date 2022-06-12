import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import routes from '@/constants/routes';

import S from './styles';

const StoryPreview = () => (
  <S.PreviewCard>
    <Link component={NavLink} to={routes.main} underline="none">
      <S.Image src="https://pgmcpskov.ru/media/thumbs/article/2021/03/skrinshot27-07-2018135630.jpg.0x1000_q85.jpg" />
      <S.Text>
        <S.Title>
          Благоустройство территории
        </S.Title>
        <S.Description>
          <LocationOnIcon />
          Челябинск
        </S.Description>
        <S.Description>
          <CalendarMonthIcon />
          15 сентября - 7 октября 2022
        </S.Description>
      </S.Text>
    </Link>
  </S.PreviewCard>
);

export default StoryPreview;

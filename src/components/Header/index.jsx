import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from '@mui/material';

import routes from '@/constants/routes';

import S from './styles';

const Header = () => (
  <S.Container>
    <Link component={NavLink} to={routes.registration}>
      Регистрация
    </Link>
    <Link component={NavLink} to={routes.login}>
      Авторизация
    </Link>
    <Link component={NavLink} to={routes.main}>
      Главная
    </Link>
  </S.Container>
);

export default Header;

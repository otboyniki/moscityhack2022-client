import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link, Button } from '@mui/material';

import routes from '@/constants/routes';

import S from './styles';

const Header = () => (
  <S.Container>
    <Link component={NavLink} to={routes.main}>
      Лого
    </Link>
    <div>
      <Button
        component={NavLink}
        to={routes.registration}
        variant="contained"
        color="secondary"
      >
        Регистрация
      </Button>
      <Button
        component={NavLink}
        to={routes.login}
        variant="contained"
      >
        Вход
      </Button>
    </div>
  </S.Container>
);

export default Header;

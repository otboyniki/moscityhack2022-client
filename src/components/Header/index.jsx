import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from '@mui/material';

import routes from '@/constants/routes';

import S from './styles';
import CustomButton from '@/ui/CustomButton';

const Header = () => (
  <S.Container>
    <Link component={NavLink} to={routes.main}>
      Лого
    </Link>
    <div>
      <CustomButton
        component={NavLink}
        to={routes.registration}
        variant="contained"
        color="secondary"
      >
        Регистрация
      </CustomButton>
      <CustomButton
        component={NavLink}
        to={routes.login}
        variant="contained"
      >
        Вход
      </CustomButton>
    </div>
  </S.Container>
);

export default Header;

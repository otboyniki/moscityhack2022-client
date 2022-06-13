import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { LoadingButton } from '@mui/lab';
import { getAuthBranch } from '@/redux/auth/selectors';
import { getUserBranch } from '@/redux/user/selectors';
import { logout } from '@/redux/auth/actions';

import routes from '@/constants/routes';

import S from './styles';

const Header = () => {
  const { isAuthorized, isLoading } = useSelector(getAuthBranch);
  const { firstName } = useSelector(getUserBranch);

  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <S.Container>
      <Link component={NavLink} to={routes.main}>
        Лого
      </Link>
      <S.Links>
        <S.CustomLink component={NavLink} to={routes.events}>
          Cобытия
        </S.CustomLink>
      </S.Links>
      <S.Buttons>
        {!isAuthorized && (
          <>
            <Button
              component={NavLink}
              to={routes.registration}
              variant="contained"
              color="secondary"
              sx={{ mr: 2 }}
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
          </>
        )}
        {isAuthorized && (
          <>
            <S.Name>
              <Typography>
                {firstName}
              </Typography>
            </S.Name>
            <LoadingButton
              variant="contained"
              onClick={handleLogoutClick}
              disabled={isLoading}
              loading={isLoading}
            >
              Выйти
            </LoadingButton>
          </>
        )}
      </S.Buttons>
    </S.Container>
  );
};

export default Header;

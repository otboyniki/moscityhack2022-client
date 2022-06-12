import React from 'react';
import { NavLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';

import PageLayout from '@/ui/PageLayout';

import routes from '@/constants/routes';

import S from './styles';

const SignLayout = ({ children, showBackButton }) => (
  <PageLayout isDark>
    <S.FormContainer>
      {
        showBackButton && (
          <Button
            component={NavLink}
            to={routes.main}
            variant="outlined"
            startIcon={<ArrowBackIcon />}
          >
            Вернуться на главную
          </Button>
        )
      }
      <S.FullWrapper>
        {children}
      </S.FullWrapper>
    </S.FormContainer>
  </PageLayout>
);

export default SignLayout;

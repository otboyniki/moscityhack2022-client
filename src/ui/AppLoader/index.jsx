import React from 'react';

import Loader from '@/ui/Loader';

import S from './styles';

const AppLoader = () => (
  <S.Container>
    <Loader
      width={60}
      height={60}
      color="#fed26c"
    />
  </S.Container>
);

export default AppLoader;

import React from 'react';

import S from './styles';

const PageLayout = (props) => {
  const { children, isDark } = props;

  return (
    <S.Container isDark={isDark}>
      {children}
    </S.Container>
  );
};

export default PageLayout;

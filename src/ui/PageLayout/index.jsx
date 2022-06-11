import React from 'react';

import S from './styles';

const PageLayout = (props) => {
  const { children } = props;

  return (
    <S.Container>
      {children}
    </S.Container>
  );
};

export default PageLayout;

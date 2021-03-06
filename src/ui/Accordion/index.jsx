import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import S from './styles';

const Accordion = (props) => {
  const { title, openByDefault = false, children } = props;

  const [isOpened, setIsOpened] = useState(openByDefault);

  return (
    <div>
      <S.Title onClick={() => setIsOpened(!isOpened)}>
        {title}
        <S.Icon rotated={isOpened}>
          <ExpandMoreIcon />
        </S.Icon>
      </S.Title>
      {isOpened && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;

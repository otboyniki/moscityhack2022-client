import React, { useState } from 'react';

import {
  AppBar,
  Dialog,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';

import FilterAlt from '@mui/icons-material/FilterAlt';
import CloseIcon from '@mui/icons-material/Close';

import Form from './Form';

import S from './styles';

const EventsFilter = (props) => {
  const { filter, onChange, onClear } = props;

  const [isOpened, setIsOpened] = useState(false);

  return (
    <S.Container>
      <S.Title>
        <Typography component="h1" variant="h5">
          Фильтры
        </Typography>
        <S.FilterIcon onClick={() => setIsOpened(true)}>
          <FilterAlt />
        </S.FilterIcon>
      </S.Title>
      <S.Form>
        <Form
          filter={filter}
          onChange={onChange}
          onClear={onClear}
        />
      </S.Form>
      <Dialog
        open={isOpened}
        onClose={() => setIsOpened(false)}
        fullScreen
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setIsOpened(false)}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Фильтры
            </Typography>
          </Toolbar>
        </AppBar>
        <S.Form mobile>
          <Form
            filter={filter}
            onChange={onChange}
            onClear={onClear}
          />
        </S.Form>
      </Dialog>
    </S.Container>
  );
};

export default EventsFilter;

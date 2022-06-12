/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ru from 'date-fns/locale/ru';
import debounce from 'lodash.debounce';

import {
  Button,
  Checkbox,
  FormControlLabel,
  Slider,
  TextField,
} from '@mui/material';

import { getActivitiesBranch } from '@/redux/activities/selectors';

import Accordion from '@/ui/Accordion';

import { EVENT_FORMATS } from './constants';

import S from './styles';

const Form = (props) => {
  const { filter, onChange, onClear } = props;

  const { items: activities } = useSelector(getActivitiesBranch);

  const [age, setAge] = useState([0, 100]);
  const [location, setLocation] = useState('');

  useEffect(() => {
    setAge([filter.fromAge || 0, filter.toAge || 100]);
  }, [filter.fromAge, filter.toAge]);

  useEffect(() => {
    setLocation(filter.location);
  }, [filter.location]);

  const handleActivitiesChange = ({ target }) => {
    onChange({
      activities: target.checked
        ? filter.activities.concat(target.name)
        : filter.activities.filter((id) => id !== target.name),
    });
  };

  const handleOnlineChange = ({ target }) => {
    onChange({
      format: target.checked
        ? filter.format.concat(target.name)
        : filter.format.filter((id) => id !== target.name),
    });
  };

  const handleAgeChangeDebounced = useCallback(debounce(([fromAge, toAge]) => {
    onChange({
      fromAge,
      toAge,
    });
  }, 500), []);

  const handleAgeChange = ({ target }) => {
    setAge(target.value);

    handleAgeChangeDebounced(target.value);
  };

  const handleLocationChangeDebounced = useCallback(debounce((value) => {
    onChange({
      location: value,
    });
  }, 500), []);

  const handleLocationChange = ({ target }) => {
    setLocation(target.value);

    handleLocationChangeDebounced(target.value);
  };

  return (
    <S.Blocks>
      <S.Block>
        <Accordion title="Дата">
          <div>
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              locale={ru}
            >
              <S.Date>
                <DatePicker
                  value={filter.since}
                  label="от"
                  onChange={(value) => onChange({
                    since: value,
                  })}
                  renderInput={(params) => (
                    <TextField {...params} />
                  )}
                />
              </S.Date>
              <DatePicker
                value={filter.until}
                label="до"
                onChange={(value) => onChange({
                  until: value,
                })}
                renderInput={(params) => (
                  <TextField {...params} />
                )}
              />
            </LocalizationProvider>
          </div>
        </Accordion>
      </S.Block>
      <S.Block>
        <Accordion title="Локация">
          <div>
            <TextField
              name="stringLocation"
              value={location}
              onChange={handleLocationChange}
              fullWidth
              required
            />
          </div>
        </Accordion>
      </S.Block>
      <S.Block>
        <Accordion title="Направление">
          <div>
            {activities && activities.map(({ id, title }) => (
              <FormControlLabel
                key={id}
                control={(
                  <Checkbox
                    type="checkbox"
                    name={id}
                    value={filter.activities.includes(id)}
                    checked={Boolean(filter.activities.includes(id))}
                    onChange={handleActivitiesChange}
                  />
                )}
                label={title}
              />
            ))}
          </div>
        </Accordion>
      </S.Block>
      <S.Block>
        <Accordion title="Способ участия">
          <div>
            {EVENT_FORMATS.map(({ id, title }) => (
              <FormControlLabel
                key={id}
                control={(
                  <Checkbox
                    type="checkbox"
                    name={id}
                    value={filter.format.includes(id)}
                    checked={Boolean(filter.format.includes(id))}
                    onChange={handleOnlineChange}
                  />
                )}
                label={title}
              />
            ))}
          </div>
        </Accordion>
      </S.Block>
      <S.Block>
        <Accordion title="Возраст">
          <div>
            <Slider
              getAriaLabel={() => 'Temperature range'}
              value={age}
              onChange={handleAgeChange}
              valueLabelDisplay="auto"
            />
          </div>
        </Accordion>
      </S.Block>
      <Button
        variant="contained"
        onClick={onClear}
      >
        Очистить
      </Button>
    </S.Blocks>
  );
};

export default Form;

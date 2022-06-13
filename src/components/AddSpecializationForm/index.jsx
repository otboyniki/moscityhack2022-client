import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button,
} from '@mui/material';

import { getAddEventBranch } from '@/redux/add-event/selectors';
import { addSpecialization, clearValidation, setSpecialization } from '@/redux/add-event/actions';

import Specialization from './Specialization';

import S from './styles';

const AddSpecializationForm = () => {
  const dispatch = useDispatch();

  const {
    errors,
    data,
  } = useSelector(getAddEventBranch);

  const {
    specializations = [],
  } = data;

  const handleChange = (value) => {
    dispatch(clearValidation());

    dispatch(setSpecialization(value));
  };

  const handleVacancyClick = () => {
    dispatch(addSpecialization());
  };

  const {
    specializations: specializationsErrors = [],
  } = errors || {};

  return (
    <>
      {specializations.map(({
        id,
        title,
        requirements,
        description,
        age,
        format,
        minVolunteersNumber,
        maxVolunteersNumber,
      }, index) => (
        <Specialization
          key={id}
          id={id}
          title={title}
          requirements={requirements}
          description={description}
          age={age}
          format={format}
          minVolunteersNumber={minVolunteersNumber}
          maxVolunteersNumber={maxVolunteersNumber}
          index={index}
          errors={specializationsErrors[index]}
          onChange={handleChange}
        />
      ))}
      <S.Block>
        <Button
          variant="contained"
          onClick={handleVacancyClick}
        >
          Добавить вакансию
        </Button>
      </S.Block>
    </>
  );
};

export default AddSpecializationForm;

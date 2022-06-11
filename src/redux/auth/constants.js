/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';

import { UserRoles } from '@/constants/enums';

const validateFirstName = (value = '') => [
  isEmpty(value) && 'Укажите имя',
];

const validateLastName = (value = '') => [
  isEmpty(value) && 'Укажите фамилию',
];

const validateEmail = (value = '') => [
  isEmpty(value) && 'Укажите почту',
  !isEmail(value) && 'Некорректный формат почты',
];

const validateCommunication = (value = '') => {
  if (isEmpty(value)) {
    return [
      'Укажите почту/телефон',
    ];
  }

  if (/[a-zA-Z]/.test(value)) {
    return [
      !isEmail(value) && 'Некорректный формат почты',
    ];
  }

  return [
    !isMobilePhone(value, 'ru-RU') && 'Некорректный формат телефона',
  ];
};

const validateCode = (value = '') => [
  isEmpty(value) && 'Укажите код',
];

const validateCompanyName = (value = '', deps) => {
  if (deps.type === UserRoles.Volunteer) {
    return [];
  }

  return [
    isEmpty(value) && 'Укажите название организации',
  ];
};

export const LOGIN_VALIDATORS = {
  communication: validateCommunication,
};

export const REGISTER_VALIDATORS = {
  firstName: validateFirstName,
  lastName: validateLastName,
  email: validateEmail,
  companyName: validateCompanyName,
};

export const QUICK_REGISTER_VALIDATORS = {
  firstName: validateFirstName,
  communication: validateCommunication,
};

export const CONFIRM_REGISTRATION_VALIDATORS = {
  code: validateCode,
};

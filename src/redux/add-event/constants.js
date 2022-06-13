/* eslint-disable import/prefer-default-export */
import isEmpty from 'validator/lib/isEmpty';

export const VALIDATORS = {
  activityId: (value = '') => [
    isEmpty(value) && 'Укажите вид деятельности',
  ],
  title: (value = '') => [
    isEmpty(value) && 'Укажите название',
  ],
  description: (value = '') => [
    isEmpty(value) && 'Укажите описание',
  ],
  location: (value = '') => [
    isEmpty(value) && 'Укажите локацию',
  ],
  terms: (value = '') => [
    isEmpty(value) && 'Укажите условия',
  ],
  recruitment: (value = {}) => {
    if (value.since && value.until) {
      return [];
    }

    return [
      'Укажите даты набора',
    ];
  },
  meeting: (value = {}) => {
    if (value.since && value.until) {
      return [];
    }

    return [
      'Укажите даты проведения',
    ];
  },
  specializations: (value = []) => (
    value.map(({
      title,
      requirements,
      description,
      minVolunteersNumber,
      maxVolunteersNumber,
    }) => ({
      title: [
        isEmpty(title) && 'Укажите название',
      ],
      requirements: [
        isEmpty(requirements) && 'Укажите требования',
      ],
      description: [
        isEmpty(description) && 'Укажите описание',
      ],
      minVolunteersNumber: [
        isEmpty(minVolunteersNumber) && 'Укажите минимальное количество волонтеров',
      ],
      maxVolunteersNumber: [
        isEmpty(maxVolunteersNumber) && 'Укажите максимальное количество волонтеров',
      ],
    }))
  ),
};

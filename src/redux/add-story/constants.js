/* eslint-disable import/prefer-default-export */
import isEmpty from 'validator/lib/isEmpty';

import { StoryTypes } from '@/constants/enums';

export const VALIDATORS = {
  format: (value = '') => [
    isEmpty(value) && 'Укажите формат истории',
  ],
  description: (value = '', deps) => {
    if (deps.format === StoryTypes.Video) {
      return [];
    }

    return [
      isEmpty(value) && 'Укажите описание',
    ];
  },
  previewId: (value = '', deps) => {
    if (deps.format === StoryTypes.Text) {
      return [];
    }

    return [
      isEmpty(value) && 'Загрузите видео',
    ];
  },
  activityIds: (value = []) => [
    value.length === 0 && 'Укажите к чему относится история',
  ],
  shortDescription: (value = '', deps) => {
    if (deps.format === StoryTypes.Video) {
      return [];
    }

    return [
      isEmpty(value) && 'Укажите короткое описание',
    ];
  },
  title: (value = '') => [
    isEmpty(value) && 'Укажите название истории',
  ],
};

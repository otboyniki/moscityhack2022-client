import { EventFormats } from '@/constants/enums';

/* eslint-disable import/prefer-default-export */
export const mapFilter = (filter) => ({
  activities: filter.activities || [],
  since: filter.since
    ? new Date(filter.since).toISOString()
    : null,
  until: filter.until
    ? new Date(filter.until).toISOString()
    : null,
  isOnline: filter.format && filter.format.length === 1
    ? filter.format.includes(EventFormats.Online)
    : null,
  fromAge: filter.fromAge,
  toAge: filter.toAge,
  stringLocation: filter.location,
  isArchived: filter.isArchived,
});

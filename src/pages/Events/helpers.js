export const mapFilter = (filter) => ({
  activities: filter.activities || [],
  since: filter.since ? new Date(filter.since).toISOString() : null,
  until: filter.until ? new Date(filter.until).toISOString() : null,
  format: filter.format || [],
  fromAge: filter.fromAge,
  toAge: filter.toAge,
  location: filter.location,
});

const parseActivities = (activities) => {
  if (!activities) {
    return {
      activities: [],
    };
  }

  if (!Array.isArray(activities)) {
    return {
      activities: [activities],
    };
  }

  return {
    activities,
  };
};

const parseFormat = (format) => {
  if (!format) {
    return {
      format: [],
    };
  }

  if (!Array.isArray(format)) {
    return {
      format: [format],
    };
  }

  return {
    format,
  };
};

export const demapFilter = (filter) => ({
  ...parseActivities(filter.activities),
  since: filter.since ? new Date(filter.since) : null,
  until: filter.until ? new Date(filter.until) : null,
  ...parseFormat(filter.format),
  fromAge: filter.fromAge,
  toAge: filter.toAge,
  location: filter.location,
});

/* eslint-disable no-shadow */
const validate = (validators) => (data) => {
  const mapObject = (obj, fn) => Object.fromEntries(
    Object
      .entries(obj)
      .map(([key, value]) => [key, fn(value, key)]),
  );

  const errors = Object.entries(validators)
    .reduce((errors, [name, validate]) => ({
      ...errors,
      [name]: validate(data[name], data)
        .map((item) => {
          if (typeof item !== 'object') {
            return item;
          }

          return mapObject(item, (value) => value.filter(Boolean));
        })
        .filter(Boolean),
    }), {});

  return {
    hasErrors: Object.values(errors)
      .flat()
      .some((errors) => !!errors.length),
    errors,
  };
};

export default validate;

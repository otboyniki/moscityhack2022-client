/* eslint-disable no-shadow */
const validate = (validators) => (data) => {
  const errors = Object.entries(validators)
    .reduce((errors, [name, validate]) => ({
      ...errors,
      [name]: validate(data[name], data).filter(Boolean),
    }), {});

  return {
    hasErrors: Object.values(errors)
      .some((errors) => !!errors.length),
    errors,
  };
};

export default validate;

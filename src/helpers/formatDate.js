const formatDate = (date, options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}) => {
  const formatter = new Intl.DateTimeFormat('ru', options);

  return formatter.format(new Date(date));
};

export default formatDate;

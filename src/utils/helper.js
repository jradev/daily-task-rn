import moment from 'moment';

export const formatDate = (date, format = 'MMM D YYYY, h:mm A') => {
  return moment(date).format(format);
};

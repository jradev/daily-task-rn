import moment from 'moment';

export const formatDate = (date, format = 'MMM D YYYY, h:mm A') => {
  return moment(date).format(format);
};


export const isSameDay = (day1, day2) => {
    return moment(day1).isSame(moment(day2), 'date');
}
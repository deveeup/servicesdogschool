export const shortMonths = [
  '',
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

export const formatDay = (day: string) => {
  let formatDay: string = '';

  switch (day) {
    case '01':
      formatDay = '1st';
      break;
    case '02':
      formatDay = '2nd';
      break;
    case '03':
      formatDay = '3rn';
      break;
    default:
      formatDay = `${day}th`;
  }

  return formatDay;
}


export const formatDate = (date: string) => {
  const splitDate = date.split('-');



  return {
    day: formatDay(splitDate[2]),
    month: shortMonths[Number(splitDate[1])],
    year: splitDate[0],
  }
};
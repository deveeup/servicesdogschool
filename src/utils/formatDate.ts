const months = [
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

export const formatDate = (date: string) => {
  const splitDate = date.split('-');
  let formatDay: string = '';

  switch (splitDate[2]) {
    case '01':
      formatDay = '1st';
      break;
    case '02':
      formatDay = '2nd';
      break;
    case '03':
      formatDay = '3rn'
      break;
    default:
      formatDay = `${splitDate[2]}th`;
  }

  return {
    day: formatDay,
    month: months[Number(splitDate[1])],
    year: splitDate[0],
  }
};
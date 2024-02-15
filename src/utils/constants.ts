export const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const currentDate = new Date();

export const initialDate = {
  year: currentDate.getFullYear(),
  month: currentDate.getMonth(),
  monthName: currentDate.toLocaleString('en-US', { month: 'long' }),
  day: currentDate.getDate(),
  weekDay: currentDate.toLocaleString('en-US', { weekday: 'short' }),
};

export const MIN_MONTH_NUM = 0;
export const MAX_MONTH_NUM = 11;
export const MONTH_START_DAY = 1;

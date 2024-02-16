export const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const currentDate = new Date();

export const initialDateValues = {
  year: currentDate.getFullYear(),
  month: currentDate.getMonth(),
  monthName: currentDate.toLocaleString('en-US', { month: 'long' }),
  day: currentDate.getDate(),
  weekDayName: currentDate.toLocaleString('en-US', { weekday: 'short' }),
  weekDay: currentDate.getDay(),
};

export const MIN_MONTH_NUM = 0;
export const MAX_MONTH_NUM = 11;
export const MONTH_START_DATE = 1;

export const PREV = 'prev';
export const NEXT = 'next';
export const AMOUNT_DAYS_IN_WEEK = 6;

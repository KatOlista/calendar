import { v4 as uuid } from 'uuid';
import { DayType } from '../types';
import { AMOUNT_DAYS_IN_WEEK, PREV } from '.';

export const getDaysAmount = (month: number, year: number) => {
  return new Date(year, month + 1, 0).getDate();
};

export const addZero = (value: number) => {
  return value > 9
    ? value
    : '0' + value;
};

export const generateDays = (month: number, year: number) => {
  
  return [...Array(getDaysAmount(month, year))]
    .map((_, index) => {
      const correctMonth = month + 1;
      const correctDay = index + 1;

      return {
        id: uuid(),
        fullDate: `${year}-${addZero(correctMonth) }-${addZero(correctDay)}`,
        dayOfMonth: index + 1,
        month: month,
        year: year,
      };
    });
};

export const getWeekDayNumber = (date: string) => {
  return new Date(date).getDay();
};

export const getVisibleDays = (days: DayType[], day: number, prevOrNext?: string) => {
  if (prevOrNext === PREV) {
    return !day
    ? []
    : days.slice(-day);
  }

  return day === AMOUNT_DAYS_IN_WEEK
  ? []
  : days.slice(0, AMOUNT_DAYS_IN_WEEK - day);
};

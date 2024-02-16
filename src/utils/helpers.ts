import { AMOUNT_DAYS_IN_WEEK, MAX_MONTH_NUM, MIN_MONTH_NUM, PREV } from ".";
import { DayType } from "../types";

export function getNumberOfDaysInMonth(month: number, year: number) {
  return new Date(year, month + 1, 0).getDate();
}

export const getWeekDayNumber = (date: string) => {
  return new Date(date).getDay();
}

export function createDaysForMonth(month: number, year: number) {
  return [...Array(getNumberOfDaysInMonth(month, year))]
    .map((_, index) => {

      return {
        dateString: Date.parse(`${year}-${month + 1}-${index + 1}`),
        dayOfMonth: index + 1,
        month: month,
      };
    });
}

export const getPrevMonth = (currentMonth: number, currentYear: number) => {
  let actualMonth, actualYear;

  if (!currentMonth) {
    actualYear = currentYear - 1;
    actualMonth = MAX_MONTH_NUM;
  } else {
    actualMonth = currentMonth - 1;
    actualYear = currentYear;
  }

  return [actualMonth, actualYear];
}

export const getNextMonth = (currentMonth: number, currentYear: number) => {
  let actualMonth, actualYear;

  if (currentMonth === MAX_MONTH_NUM) {
    actualYear = currentYear + 1;
    actualMonth = MIN_MONTH_NUM;
  } else {
    actualMonth = currentMonth + 1;
    actualYear = currentYear;
  }

  return [actualMonth, actualYear];
}

export const getVisibleDays = (days: DayType[], day: number, prevOrNext?: string) => {
  if (prevOrNext === PREV) {
    return !day
    ? []
    : days.slice(-day);
  }

  return day === AMOUNT_DAYS_IN_WEEK
  ? []
  : days.slice(0, AMOUNT_DAYS_IN_WEEK - day);
}

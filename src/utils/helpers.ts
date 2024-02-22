import { MAX_MONTH_NUM, MIN_MONTH_NUM } from ".";

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

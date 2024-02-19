import {createUseStyles} from 'react-jss';
import { useContext } from 'react';

import { DayItem } from './DayItem';
import { DateContext, TodoProvider } from '../context';

import { 
  MONTH_START_DATE, 
  PREV, 
  createDaysForMonth, 
  getNextMonth, 
  getPrevMonth,
  getVisibleDays,
  getWeekDayNumber,
} from '../utils';

const useStyles = createUseStyles({
  myCalendar: {
    // maxWidth: '100vw',
    padding: 0,
    display: 'grid',
    gap: 5,
    gridTemplateColumns: 'repeat(7, 1fr)',
    // gridTemplateRows: 'repeat(5, 1fr)',
    backgroundColor: '#EEEFF1',
  },
});

export const Calendar = () => {
  const classes = useStyles();

  const { year, selectedMonth } = useContext(DateContext);

  const [prevMonth, prevMonthYear] = getPrevMonth(selectedMonth, year);
  const [nextMonth, nextMonthYear] = getNextMonth(selectedMonth, year);

  const currentMonthDays = createDaysForMonth(selectedMonth, year);
  const previousMonthDays = createDaysForMonth(prevMonth, prevMonthYear);
  const nextMonthDays = createDaysForMonth(nextMonth, nextMonthYear);

  const firstMonthWeekDay = getWeekDayNumber(`${year} ${selectedMonth + 1} ${MONTH_START_DATE}`);
  const lastMonthWeekDay = getWeekDayNumber(`${year} ${selectedMonth + 1} ${currentMonthDays.length}`);

  const visiblePrevDays = getVisibleDays(previousMonthDays, firstMonthWeekDay, PREV);
  const visibleNextDays = getVisibleDays(nextMonthDays, lastMonthWeekDay);

  const calendarGridDays = [ 
    ...visiblePrevDays, 
    ...currentMonthDays,
    ...visibleNextDays,
  ];

  return (
    <TodoProvider>
      <ul className={classes.myCalendar}>
        {calendarGridDays.map(day => (
          <DayItem key={day.id} day={day} />
        ))}
      </ul>
    </TodoProvider>
  );
};

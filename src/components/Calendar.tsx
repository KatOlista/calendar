import {createUseStyles} from 'react-jss';
import { useContext } from 'react';

import { DayItem } from './DayItem';
import { DateContext } from '../context';

import { 
  MONTH_START_DATE, 
  PREV, 
  generateDays, 
  getNextMonth,
  getPrevMonth,
  getVisibleDays,
  getWeekDayNumber,
} from '../utils';

const useStyles = createUseStyles({
  myCalendar: {
    margin: 0,
    padding: 0,
    display: 'grid',
    gap: 5,
    gridTemplateColumns: 'repeat(7, 1fr)',
    gridAutoRows: '1fr',
    backgroundColor: '#EEEFF1',
  },
});

export const Calendar = () => {
  const classes = useStyles();

  const { year, selectedMonth } = useContext(DateContext);

  const [prevMonth, prevMonthYear] = getPrevMonth(selectedMonth, year);
  const [nextMonth, nextMonthYear] = getNextMonth(selectedMonth, year);

  const currentMonthDays = generateDays(selectedMonth, year);
  const previousMonthDays = generateDays(prevMonth, prevMonthYear);
  const nextMonthDays = generateDays(nextMonth, nextMonthYear);

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
    <ul className={classes.myCalendar} id="capture">
      {calendarGridDays.map(day => (
        <DayItem key={day.id} day={day} />
      ))}
    </ul>
  );
};

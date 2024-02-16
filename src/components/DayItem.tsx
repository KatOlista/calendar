import {createUseStyles} from 'react-jss';
import { useContext } from 'react';
import cn from 'classnames';

import { DayType } from '../types';
import { DateContext } from '../context';
import { initialDateValues } from '../utils';

const useStyles = createUseStyles({
  myDay: {
    padding: 10,
    boxSizing: 'border-box',
    width: '100%',
    height: 'auto',
    backgroundColor: '#EBEBEB',
    listStyle: 'none',
  },

  currentMonth: {
    backgroundColor: '#E3E4E6',
  },

  currentDay: {
    fontWeight: 700,
    border: '2px solid #D4ABD2',
  },

  todoList: {
    width: '80%',
    height: '80%',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
});

type Props = {
  day: DayType;
};

export const DayItem: React.FC<Props> = ({ day }) => {
  const classes = useStyles();
  const { selectedMonth } = useContext(DateContext);

  const isCurrentMonth = selectedMonth === day.month;
  const isCurrentDay = initialDateValues.day === day.dayOfMonth;
  
  return (
    <li className={cn(
        classes.myDay,
        { [classes.currentMonth]: isCurrentMonth },
        { [classes.currentDay]: isCurrentDay }
      )}>
        <span>{day.dayOfMonth}</span>

        <li>

        </li>
    </li>
  );
};
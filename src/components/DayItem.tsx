import {createUseStyles} from 'react-jss';
import { useContext } from 'react';
import cn from 'classnames';

import { DayType, Todo, } from '../types';
import { DateContext } from '../context';
import { initialDateValues } from '../utils';
import { TodoList } from '.';

import { TODOS } from '../data/todos';

const useStyles = createUseStyles({
  myDay: {
    padding: 10,
    backgroundColor: '#EBEBEB',
    overflow: 'hidden',
  },

  currentMonth: {
    backgroundColor: '#E3E4E6',
  },

  currentDay: {
    fontWeight: 700,
    border: '2px solid #2684FF',
  },

  holiday: {
    maxHeight: 24,
    backgroundColor: '#26c826',
    fontWeight: 700,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },

  todoList: {
    margin: '10px auto',
    maxHeight: '70%',
    overflow: 'hidden',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  }
});

type Props = {
  day: DayType;
  currentHolidays?: Todo[],
};

export const DayItem: React.FC<Props> = ({ day }) => {
  const classes = useStyles();
  const { selectedMonth, holidays } = useContext(DateContext);

  const { 
    dayOfMonth, 
    month, 
    fullDate, 
  } = day;

  const isCurrentMonth = selectedMonth === month;
  const isCurrentDay = initialDateValues.day === dayOfMonth;
  const currentHoliday = holidays.find(({ date }) => date === fullDate);
  const currentTodos = TODOS.filter(({ date }) => date === fullDate);
  
  return (
    <li className={cn(
        classes.myDay,
        { [classes.currentMonth]: isCurrentMonth },
        { [classes.currentDay]: isCurrentDay }
      )}>
        <h3>{dayOfMonth}</h3>
        
        <ul className={classes.todoList}>
          {!!currentHoliday && (
            <li className={classes.holiday}>{currentHoliday.name}</li>
          )}

          <TodoList todos={currentTodos} />
        </ul>
    </li>
  );
};
import { createUseStyles } from 'react-jss';
import { useContext, useState } from 'react';
import cn from 'classnames';
import Modal from 'react-modal';

import { DayType, Todo, } from '../types';
import { DateContext, TodoContext } from '../context';
import { MODULE_TITLES, initialDateValues } from '../utils';
import { TodoList, Button, TodoForm } from '.';
import { VisibleTodoList } from './VisibleTodoList';

const useStyles = createUseStyles({
  myDay: {
    padding: 5,
    overflow: 'hidden',
    borderRadius: 5,
    backgroundColor: '#EBEBEB',
    border: '2px solid transparent',
  },

  currentMonth: {
    backgroundColor: '#E3E4E6',
  },

  currentDay: {
    fontWeight: 700,
    borderColor: '#2684FF',
  },

  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  btnCloseModale: {
    height: 40,
    width: 40,
  },

  btnContainer: {
    display: 'flex',
    gap: 5,
  },

  date: {
    fontSize: 14,
  },

  content: {
    margin: '30px 0 0',
    height: '70%',
    'overflow-y': 'auto',
  },

  list: {
    paddingInline: 5,
    overflow: 'hidden',
    maxHeight: 60,
    position: 'relative',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },

  '@media (max-width: 768px)': {
    list: {
      maxHeight: 40,
    }
  }
});

const customStyles = {
  content: {
    minWidth: '35%',
    height: '40%',
    overflow: 'visible',
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

type Props = {
  day: DayType;
  currentHolidays?: Todo[],
};

export const DayItem: React.FC<Props> = ({ day }) => {
  const classes = useStyles();
  const { selectedMonth, holidays } = useContext(DateContext);

  const { todos } = useContext(TodoContext);

  const { 
    dayOfMonth, 
    month, 
    fullDate,
    year,
  } = day;

  const isSelectedMonth = selectedMonth === month;

  const isCurrentYear = initialDateValues.year === year;
  const isCurrentMonth = initialDateValues.month === month;
  const isCurrentDay = initialDateValues.day === dayOfMonth;
  
  const isToday = isCurrentDay && isCurrentMonth && isCurrentYear;

  const currentHoliday = holidays.filter(({ date }) => date === fullDate);
  const currentTodos = todos.filter(({ date }) => date === fullDate);

  const allTasks = [...currentHoliday, ...currentTodos];

  Modal.setAppElement('#root');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [formIsOpen, setFormIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!modalIsOpen);
    closeForm();
  };

  const toggleForm = () => {
    setFormIsOpen(!formIsOpen);
  };

  const closeForm = () => {
    setFormIsOpen(false);
  };
  
  return (
    <li className={cn(
        classes.myDay,
        { [classes.currentMonth]: isSelectedMonth },
        { [classes.currentDay]: isToday }
    )}>

      <h3 className={classes.date}>{dayOfMonth}</h3>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        style={customStyles}
      >
        <div className={classes.title}>
          <h2>{MODULE_TITLES.todoList(currentTodos.length)}</h2>

          <div className={classes.btnContainer}>
            <Button onClick={toggleForm} content="+" />

            <Button onClick={toggleModal} content="x" />
          </div>
        </div>

        <div className={classes.content}>
          { formIsOpen 
            ? (<TodoForm date={fullDate} setFormIsOpen={setFormIsOpen} />)
            : (<TodoList todos={currentTodos} />)
          }
        </div>
      </Modal>

      <div onClick={toggleModal} className={classes.list}>
        {!!allTasks.length && (
          <VisibleTodoList allTasks={allTasks} />
        )}
      </div>
    </li>
  );
};

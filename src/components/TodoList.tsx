import {createUseStyles} from 'react-jss';
import { HolidayList } from '.';
// import { useContext } from 'react';
// import cn from 'classnames';

const useStyles = createUseStyles({
  todoList: {
    boxSizing: 'border-box',
    margin: '10px auto',
    maxHeight: '70%',
    overflow: 'hidden',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
});

// type Props = {
  // todo: 
// };

// export const TodoList: React.FC<Props> = ({ todo }) => {
export const TodoList = () => {
  const classes = useStyles();
  
  return (
    <ul className={classes.todoList}>
      <HolidayList />
    </ul>
  );
};

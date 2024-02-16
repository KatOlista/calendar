import {createUseStyles} from 'react-jss';
// import { useContext } from 'react';
// import cn from 'classnames';

const useStyles = createUseStyles({
  todoItem: {
    backgroundColor: '#FFFFFF',
  },
});

// type Props = {
// };

// export const TodoList: React.FC<Props> = () => {
export const TodoItem = () => {
  const classes = useStyles();

  // const {  } = useContext();
  
  return (
    <li className={classes.todoItem}>
    </li>
  );
};

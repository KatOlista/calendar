import {createUseStyles} from 'react-jss';
import { Todo } from '../types';
// import { useContext } from 'react';
// import cn from 'classnames';

const useStyles = createUseStyles({
  todoItem: {
    maxHeight: 24,
    backgroundColor: '#FFFFFF',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
});

type Props = {
  todo: Todo,
};

export const TodoItem: React.FC<Props> = ({ todo }) => {
  const classes = useStyles();

  const { name } = todo;
  
  return (
    <li className={classes.todoItem}>
      {name}
    </li>
  );
};

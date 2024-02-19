import {createUseStyles} from 'react-jss';

// import cn from 'classnames';

import { TodoItem } from '.';
import { Todo } from '../types';

const useStyles = createUseStyles({
  todoList: {
    maxHeight: '70%',
    backgroundColor: 'yellow',
  },
});

type Props = {
  todos: Todo[],
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  const classes = useStyles();
  
  return (
    <ul className={classes.todoList}>
      {todos.map(todo => {
        return (
        <TodoItem key={todo.id} todo={todo} />
      )})}
    </ul>
  );
};

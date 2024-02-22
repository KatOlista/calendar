import {createUseStyles} from 'react-jss';

import { TodoItem } from '.';
import { Todo } from '../types';

const useStyles = createUseStyles({
  todoList: {
    fontSize: 14,
    lineHeight: '120%',
  },
});

type Props = {
  todos: Todo[],
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  const classes = useStyles();
  
  return (
    <section className={classes.todoList}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </section>
  );
};

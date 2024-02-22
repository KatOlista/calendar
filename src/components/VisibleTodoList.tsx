import {createUseStyles} from 'react-jss';

import { Todo } from '../types';
import { VisibleTodoItem } from './VisibleTodoItem';

const useStyles = createUseStyles({
  visibleList: {
    fontSize: 14,
    lineHeight: '120%',
  },
});

type Props = {
  allTasks: Todo[],
};

export const VisibleTodoList: React.FC<Props> = ({ allTasks }) => {
  const classes = useStyles();

  const visibleTasks = allTasks.length > 2
    ? allTasks.slice(0, 2)
    : allTasks;
  
  return (
    <section className={classes.visibleList}>
      {visibleTasks.map(todo => (
        <VisibleTodoItem key={todo?.id} todo={todo} />)
      )}
    </section>
  );
};

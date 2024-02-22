import {createUseStyles} from 'react-jss';
import { v4 as uuid } from 'uuid';

import { Todo } from '../types';
import { Label } from '.';

const useStyles = createUseStyles({
  todoItem: {
    padding: '12px 0 4px',
    position: 'relative',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    fontSize: 14,
    lineHeight: '100%',
    backgroundColor: '#FFFFFF',
  },

  label: {
    position: 'absolute',
    top: 3,
    height: 8,
    width: '90%',
    overflow: 'hidden',
  },
});

type Props = {
  todo: Todo,
};

export const VisibleTodoItem: React.FC<Props> = ({ todo }) => {
  const classes = useStyles();

  const { name } = todo;
  
  return (
    <article className={classes.todoItem}>
      <span className={classes.label}>
        {todo.labelColors?.map(color => {

          return (
          <Label key={color.label + uuid()} color={color.label} />
        )})}
      </span>
    
      {name}
    </article>
  );
};

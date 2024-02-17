import {createUseStyles} from 'react-jss';
// import { useContext } from 'react';
// import cn from 'classnames';

const useStyles = createUseStyles({
  todoItem: {
    backgroundColor: '#FFFFFF',
  },
});

// type Props = {
  // todo: 
// };

// export const TodoItem: React.FC<Props> = ({ todo }) => {
export const TodoItem = () => {
  const classes = useStyles();
  
  return (
    <li className={classes.todoItem}>
      {(<TodoItem />)}
    </li>
  );
};

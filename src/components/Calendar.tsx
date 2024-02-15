import {createUseStyles} from 'react-jss';
import { Day } from '.';
import { TodoProvider } from '../context';

const useStyles = createUseStyles({
  myCalendar: {
    width: '100vw',
    display: 'grid',
    gap: '1rem',
    // gridAutoFlow: 'row',
    gridTemplateColumns: 'repeat(7, 1fr)',
    backgroundColor: 'yellow',
  }
});

export const Calendar = () => {
  const classes = useStyles();

  return (
    <main className={classes.myCalendar}>
      <TodoProvider>
        <ul>
          <Day />
        </ul>
      </TodoProvider>
    </main>
  );
};

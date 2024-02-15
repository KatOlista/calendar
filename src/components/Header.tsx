import {createUseStyles} from 'react-jss';
import { useContext } from 'react';

import { Button } from '.';
import { FlipButton } from '.';
import { DateContext } from '../context';

import { WEEK_DAYS } from '../utils/constants';


const useStyles = createUseStyles({
  myHeader: {
    paddingBlock: 10,
    backgroundColor: '#EEEFF1',
  },

  myNavigation: {
    display: 'grid',
    gridTemplateColumns: '1fr 5fr 1fr',
    fontWeight: 700,
  },

  btnContainer: {
    paddingInline: 10,
    gap: 10,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    justifyItems: 'center',
  },

  selectedMonth: {
    textAlign: 'center',
    fontSize: 30,
  },

  weekDays: {
    display: 'grid',
    gridAutoFlow: 'column',
  },
  weekDay: {
    textAlign: 'center',
    lineHeight: '40px',
  },
});

export const Header = () => {
  const classes = useStyles();

  const { year, monthName } = useContext(DateContext);

  return (
    <header className={classes.myHeader} >
      <nav className={classes.myNavigation}>
        <div className={classes.btnContainer}>
          <FlipButton />
          <FlipButton btnType="shewronDown"/>
        </div>

        <div className={classes.selectedMonth} >
          <span>{`${monthName} ${year}`}</span>
        </div>

        <div className={classes.btnContainer}>
        <Button content="Month" />
        <Button content="Week" />
        </div>
      </nav>

      <div className={classes.weekDays}>
        {WEEK_DAYS.map(day => (
          <div key={day} className={classes.weekDay}>{day}</div>
        ))}
      </div>
    </header>
  );
};

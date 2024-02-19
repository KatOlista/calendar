import {createUseStyles} from 'react-jss';
import { useContext } from 'react';

import { FlipButton, DropDown } from '.';
import { DateContext } from '../context';

import { WEEK_DAYS } from '../utils';


const useStyles = createUseStyles({
  myHeader: {
    paddingBlock: 10,
    width: '100vw',
    backgroundColor: '#EBEBEB',
  },

  myNavigation: {
    display: 'grid',
    gridTemplateColumns: '1fr 10fr 2fr',
    fontWeight: 700,
  },

  btnContainer: {
    paddingLeft: 10,
    gap: 10,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    justifyItems: 'right',
  },

  selectedMonth: {
    textAlign: 'center',
  },

  dropDownContainer: {
    paddingRight: 10,
    display: 'grid',
    justifyItems: 'right',
  },

  weekDays: {
    display: 'grid',
    gridAutoFlow: 'column',
  },

  weekDay: {
    textAlign: 'center',
    lineHeight: '40px',
  },
  // '@media (max-width: 425px)': {
  //   selectedMonth: {
  //     fontSize: 16
  //   }
  // }
});

export const Header = () => {
  const classes = useStyles();

  const { year, monthName } = useContext(DateContext);

  return (
    <header className={classes.myHeader} >
      <nav className={classes.myNavigation}>
        <div className={classes.btnContainer}>
          <FlipButton />
          <FlipButton nextMonth />
        </div>

        <div className={classes.selectedMonth} >
          <h1>{`${monthName} ${year}`}</h1>
        </div>

        <div className={classes.dropDownContainer}>
          <DropDown />
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

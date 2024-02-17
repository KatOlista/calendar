import React, { useContext } from 'react';
import {createUseStyles} from 'react-jss';
import cn from 'classnames';

import { DateContext } from '../../context';
import { 
  getNextMonth,
  getPrevMonth, 
} from '../../utils';

const useStyles = createUseStyles({
  flipButton: {
    width: 40,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    background: {
      image: 'url("./assets/icons/chevron-up_icon.svg")',
    },
  },
  selected: {
    backgroundColor: '#CBD0D3',
  },
  shevronDown: {
    transform: 'rotate(180deg)',
    '&:hover': {
      transform: 'rotate(180deg) scale(1.1)',
    },
  }
});

type Props = {
  nextMonth?: boolean;
};

export const Button: React.FC<Props> = ({ nextMonth }) => {
  const classes = useStyles();

  const { 
    year,
    setYear,
    selectedMonth,
    setSelectedMonth,
  } = useContext(DateContext);

  const selectedMonthHandler = () => {
    const [actualMonth, actualYear] = nextMonth
      ? getNextMonth(selectedMonth, year)
        : getPrevMonth(selectedMonth, year);

    setSelectedMonth(actualMonth);
    setYear(actualYear);
  };

  return (
      <button 
        type="button"
        onClick={() => selectedMonthHandler()}
        className={cn(
          classes.flipButton,
          { [classes.shevronDown]: nextMonth },
        )}
      />
  );
};

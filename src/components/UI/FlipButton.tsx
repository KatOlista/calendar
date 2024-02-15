import React, { useContext } from 'react';
import {createUseStyles} from 'react-jss';
import { DateContext } from '../../context';
import { 
  MAX_MONTH_NUM, 
  MIN_MONTH_NUM, 
} from '../../utils';

const useStyles = createUseStyles({
  flipButton: {
    width: 40,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    background: {
      image: 'url("/assets/icons/chevron-up_icon.svg")',
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
  btnType?: string | undefined;
};

export const FlipButton: React.FC<Props> = ({ btnType }) => {
  const classes = useStyles();

  const { 
    year,
    setYear,
    month,
    setMonth,
  } = useContext(DateContext);

  const selectedMonthHandler = () => {
    const flipMonthValue = btnType ? 1 : -1;

    if (!month && flipMonthValue === -1) {
      setYear(year + flipMonthValue);
      setMonth(MAX_MONTH_NUM);
    } else if (month === MAX_MONTH_NUM && flipMonthValue === 1) {
      setYear(year + flipMonthValue);
      setMonth(MIN_MONTH_NUM);
    } else {
      setMonth(month + flipMonthValue);
    }
  };

  return (
      <button 
        type="button"
        onClick={() => selectedMonthHandler()}
        className={`${classes.flipButton} ${btnType ? classes.shevronDown : ''}`}
      />
  );
};

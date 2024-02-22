import {createUseStyles} from 'react-jss';
import { useContext } from 'react';

import { FlipButton, DropDown } from '.';
import { DateContext } from '../context';
import { WEEK_DAYS } from '../utils';


const useStyles = createUseStyles({
  myHeader: {
    paddingTop: 5,
    width: '100vw',
    backgroundColor: '#EBEBEB',
  },

  myNavigation: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 2fr 2fr',
    fontWeight: 700,
  },

  btnContainer: {
    paddingInline: 10,
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 20,
  },

  selectedMonth: {
    fontSize: 24,
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
    lineHeight: '30px',
  },
  // '@media (max-width: 425px)': {
  //   selectedMonth: {
  //     fontSize: 16
  //   }
  // }
});

export const Header = () => {
  const classes = useStyles();

  const { 
    year,
    monthName,
    selectedCountry,
    setSelectedCountry,
    countries,
  } = useContext(DateContext);

  return (
    <header className={classes.myHeader} >
      <nav className={classes.myNavigation}>
        <div className={classes.btnContainer}>
          <FlipButton />
          <FlipButton nextMonth />
        </div>

        <div className={classes.dropDownContainer}>
          {/* <DropDown
            placeholder='Select ?????'
            selectedOption={}
            setSelectedOption={}
            options={}
          /> 
          <input />????
          */}
        </div>

        <div className={classes.dropDownContainer}>
          {/* <DropDown
            placeholder='Select '
            selectedOptions={}
            setSelectedOptions={}
            options={}
            isMulty
          /> */}
        </div>

        <div className={classes.dropDownContainer}>
          <DropDown
            placeholder='Select country'
            selectedOption={selectedCountry}
            setSelectedOption={setSelectedCountry}
            options={countries}
          />
        </div>
      </nav>

      <h1 className={classes.selectedMonth}>{`${monthName} ${year}`}</h1>

      <div className={classes.weekDays}>
        {WEEK_DAYS.map(day => (
          <div key={day} className={classes.weekDay}>{day}</div>
        ))}
      </div>
    </header>
  );
};

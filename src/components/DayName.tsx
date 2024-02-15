import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  myDayName: {
    backgroundColor: 'yellow',
  }
});

type Props = {
  day: string,
}

export const DayName: React.FC<Props> = ({ day }) => {
  const classes = useStyles();

  return (
    <div className={classes.myDayName}>
      {day}
    </div>
);
};

import React from 'react';
import {createUseStyles} from 'react-jss';

// import cn from 'classnames';

type Props = {
  color: string,
};

export const Label: React.FC<Props> = ({ color }) => {
  const useStyles = createUseStyles({
    color: {
      marginRight: 2,
      position: 'relative',
      top: '-6px',
      height: 6,
      width: 26,
      display: 'inline-block',
      borderRadius: 3,
      backgroundColor: color,
    },
  });

  const classes = useStyles();
  
  return (
    // <span className={classes.label}>
    <span className={classes.color} />
    // </span>
  );
};

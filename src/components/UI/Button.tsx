import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  myButton: {
    padding: 10,
    fontWeight: 700,
  },
  activeButton: {
    backgroundColor: '#CBD0D3',
  },
});

type Props = {
  content: string;
};

export const Button: React.FC<Props> = ({ content }) => {
  const classes = useStyles();

  return (
      <button type="button" className={classes.myButton}>
        {content}
      </button>
  );
};

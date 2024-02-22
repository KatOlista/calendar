import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  myButton: {
    padding: 10,
    fontWeight: 700,
    color: '#5E5E5E',
  },
  activeButton: {
    backgroundColor: '#CBD0D3',
  },
});

type Props = {
  content: string;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({ content, onClick = () => {}, }) => {
  const classes = useStyles();

  return (
      <button onClick={onClick} type="button" className={classes.myButton}>
        {content}
      </button>
  );
};

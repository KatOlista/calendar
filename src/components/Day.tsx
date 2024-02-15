import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  myDay: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#E3E4E6',
    listStyle: 'none',
  }
});

export const Day = () => {
  const classes = useStyles();
  
  return (
    <li key={1} className={classes.myDay}>
    </li>
  );
};
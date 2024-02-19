import {createUseStyles} from 'react-jss';
import { Button } from './UI/Button';

const useStyles = createUseStyles({
  controlPanel: {
    padding: 10,
    fontWeight: 700,
  },
});

export const Footer = () => {
  const classes = useStyles();

  return (
      <section className={classes.controlPanel}>
        <Button content='Save as image' />

        <Button content='Save as a JSON file' />
      </section>
  );
};

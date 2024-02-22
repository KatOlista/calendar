import {createUseStyles} from 'react-jss';
import html2canvas from 'html2canvas';

import { Button } from '.';

const useStyles = createUseStyles({
  controlPanel: {
    margin: '0 auto',
    padding: 20,
    fontWeight: 700,
  },
  buttons: {
    paddingInline: 40,
  },
});

const getCalendarAsImg = () => {
  html2canvas(document.getElementById('capture') as HTMLElement)?.then(canvas => {
    const pageScreenShot = document.createElement('a');
    pageScreenShot.href = canvas.toDataURL('image/png');
    pageScreenShot.download = 'calendar.png';
    pageScreenShot.click();
  });
}

const exportCalendarAsJSON = () => {}

const importCalendarAsJSON = () => {}

export const Footer = () => {
  const classes = useStyles();

  return (
      <section id="footer" className={classes.controlPanel}>
        <span className={classes.buttons}>
          <Button 
            content='Download as png' 
            onClick={getCalendarAsImg}
          />
        </span>

        <span className={classes.buttons}>
          <Button 
            content='Export as json' 
            onClick={exportCalendarAsJSON}
          />
        </span>

        <span className={classes.buttons}>
          <Button 
            content='Import as json' 
            onClick={importCalendarAsJSON}
          />
        </span>
      </section>
  );
};

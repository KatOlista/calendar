import {createUseStyles} from 'react-jss';
import html2canvas from 'html2canvas';

import { Button } from '.';
import { useContext } from 'react';
import { TodoContext } from '../context';

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

const exportData = (fileName: string, href: string,) => {
  const element = document.createElement('a');
  element.href = href;
  element.download = fileName;
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

export const Footer = () => {
  const classes = useStyles();

  const { todos } = useContext(TodoContext);

  const exportCalendarAsImgHandler = () => {
    html2canvas(document.getElementById('capture') as HTMLElement)
      ?.then(canvas => {
        const fileName = 'calendar.png';
        const href = canvas.toDataURL('image/png');

        exportData(fileName, href);
    });
  };

  const exportCalendarAsJSONHandler = async function() {
    const exportedTodos = todos.map(({ date, name }) => {
      return {
        date,
        name,
    }});

    const file = new Blob([JSON.stringify(exportedTodos)], {type: 'text/plain'});
    const fileName = 'calendar.json';
    const href = URL.createObjectURL(file);

    exportData(fileName, href);
  };
  
  const importCalendarAsJSONHandler = () => {};

  return (
      <section id="footer" className={classes.controlPanel}>
        <span className={classes.buttons}>
          <Button 
            content='Download as png' 
            onClick={exportCalendarAsImgHandler}
          />
        </span>

        <span className={classes.buttons}>
          <Button 
            content='Export as json' 
            onClick={exportCalendarAsJSONHandler}
          />
        </span>

        <span className={classes.buttons}>
          <Button 
            content='Import as json' 
            onClick={importCalendarAsJSONHandler}
          />
        </span>
      </section>
  );
};

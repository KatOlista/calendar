import {createUseStyles} from 'react-jss';
import html2canvas from 'html2canvas';
import { v4 as uuid } from 'uuid';

import { Button } from '.';
import { useContext } from 'react';
import { TodoContext } from '../context';
import { Todo } from '../types';

const useStyles = createUseStyles({
  controlPanel: {
    margin: '0 auto',
    padding: 20,
    fontWeight: 700,
  },

  buttons: {
    paddingInline: 35,
  },

  label: {
    padding: 10,
    height: 40,
    display: 'inline-flex',
    alignItems: 'center',
    verticalAlign: 'middle',
    cursor: 'pointer',
    borderRadius: 5,
    fontSize: 16,
    color: '#5E5E5E',
    border: '2px solid transparent',
    backgroundColor: '#E3E4E6',
    '&:hover': {
      borderColor: '#2684FF',
    },
    '&:focus-visible': {
      outline: '#2684FF',
    },
  },

  input: {
    display: 'none',
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

  const { todos, setTodos } = useContext(TodoContext);

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

  const importCalendarAsJSONHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const text = reader.result;

      if(text) {
        const importedTodos = JSON.parse(text as string);

        // console.log(importedTodos);

        const todosFromUser = importedTodos.map((todo: Omit<Todo, 'id'|'labelColors'>) => {
          return {
            ...todo,
            id: uuid(),
            labelColors: [],
          };
        });

        console.log(todosFromUser);

        setTodos(() => [...todosFromUser]);
      }
    });

    if (e.target.files) {
      reader.readAsText(e.target.files[0] as File);
    }
  };

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
          <label className={classes.label} htmlFor="fileInput">Import calendar as json
            <input 
              className={classes.input} 
              type="file" 
              id="fileInput"
              accept="application/JSON"
              onChange={importCalendarAsJSONHandler}
            />
          </label>
        </span>
      </section>
  );
};

import { useContext, useState } from 'react';
import {createUseStyles} from 'react-jss';
import { v4 as uuid } from 'uuid';

import { DropDown } from '.';
import { TodoContext } from '../context';
import { DropDownListElement, Todo } from '../types';

const useStyles = createUseStyles({
  form: {
    padding: 5,
    height: '100%',
    display: 'flex',
    gap: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    border: '2px solid transparent',
    borderRadius: 5,
  },

  submitBtn: {
    textAlign: 'center',
  },

  input: {
    height: 40,
    borderRadius: 5,
    border: '2px solid transparent',
    backgroundColor: '#E3E4E6',

    '&:hover': {
      borderColor: '#2684FF',
    },
    '&:focus-visible': {
      outline: '#2684FF',
    },
  },
});

type Props = {
  date: string,
  setFormIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
};

export const TodoForm: React.FC<Props> = ({ date, setFormIsOpen }) => {
  const classes = useStyles();
  const { colors, setTodos } = useContext(TodoContext);

  const [value, setValue] = useState('');
  const [labels, setLabels] = useState<DropDownListElement[]>([]);

  const addNewTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTodo: Todo = {
      id: uuid(),
      date: date,
      name: value,
      labelColors: labels,
    };

    setTodos(initialTodos => [...initialTodos, newTodo]);

    setFormIsOpen(false);
  };

  return (
    <form onSubmit={addNewTodo} className={classes.form}>
      <input 
        type="text"
        placeholder='Add task title'
        className={classes.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required 
      />

      <DropDown
        options={colors}
        placeholder='Select labels colors'
        selectedOptions={labels}
        setSelectedOptions={setLabels}
        isMulti
      />

      <div className={classes.submitBtn}>
        <button>Add new task</button>
      </div>
      
    </form>
  );
};
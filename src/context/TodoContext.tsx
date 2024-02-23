import {
  ReactNode,
  createContext,
  useState,
} from 'react';

import { DropDownListElement, Todo } from '../types';
import { TODOS } from '../data/todos';
import { COLORS } from '../data/colors';

type TodoProviderProps = {
  children: ReactNode;
};

type TodoContextType = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

  colors: DropDownListElement[],
  setColors: React.Dispatch<React.SetStateAction<DropDownListElement[]>>;
};

export const TodoContext = createContext<TodoContextType>({
  todos: TODOS, 
  setTodos: () => {},

  colors: COLORS,
  setColors: () => {},
});

export function TodoProvider({ children }: TodoProviderProps) {
  const [todos, setTodos] = useState<Todo[]>(TODOS);
  const [colors, setColors] = useState<DropDownListElement[]>(COLORS);

  const value = {
    todos, 
    setTodos,

    colors, 
    setColors,
  };

  console.log(todos);

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

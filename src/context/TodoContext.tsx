import {
  ReactNode,
  createContext,
} from 'react';

type TodoProviderProps = {
  children: ReactNode;
};

type TodoContextType = {
  // selectedCountry: Country;
  // setSelectedCountry: React.Dispatch<React.SetStateAction<Country>>;
};

export const TodoContext = createContext<TodoContextType>({
  // selectedCountry: INITIAL_COUNTRY,
  // setSelectedCountry: () => {},
});

export function TodoProvider({ children }: TodoProviderProps) {


  const value = {
    // selectedCountry,
    // setSelectedCountry,
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

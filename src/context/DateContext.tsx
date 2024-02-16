import {
  ReactNode,
  createContext,
  useState,
} from 'react';

import { 
  currentDate, 
  initialDateValues, 
} from '../utils';

type DateProviderProps = {
  children: ReactNode;
};

type DateContextType = {
  year: number;
  setYear: React.Dispatch<React.SetStateAction<number>>;


  selectedMonth: number;
  setSelectedMonth: React.Dispatch<React.SetStateAction<number>>;
  
  monthName: string;
};

export const DateContext = createContext<DateContextType>({
  year: initialDateValues.year,
  setYear: () => {},

  selectedMonth: initialDateValues.month,
  setSelectedMonth: () => {},

  monthName: initialDateValues.monthName,
});

export function DateProvider({ children }: DateProviderProps) {
  const date = currentDate;

  const [year, setYear] = useState(initialDateValues.year);
  const [selectedMonth, setSelectedMonth] = useState(initialDateValues.month);

  date.setMonth(selectedMonth);
  const monthName = date.toLocaleString('en-US', { month: 'long' });

  /////////////////////////////////////////////////

  

  const value = {
    year,
    setYear,

    selectedMonth,
    setSelectedMonth,

    monthName,
  };

  return (
    <DateContext.Provider value={value}>
      {children}
    </DateContext.Provider>
  );
}

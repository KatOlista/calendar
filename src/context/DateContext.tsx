import {
  ReactNode,
  createContext,
  useState,
} from 'react';

import { currentDate, initialDate } from '../utils';

type DateProviderProps = {
  children: ReactNode;
};

type DateContextType = {
  year: number;
  setYear: React.Dispatch<React.SetStateAction<number>>;

  month: number;
  setMonth: React.Dispatch<React.SetStateAction<number>>;
  
  monthName: string;

  // day: number;
  // weekDay: string;
};

export const DateContext = createContext<DateContextType>({
  year: initialDate.year,
  setYear: () => {},

  month: initialDate.month,
  setMonth: () => {},

  monthName: initialDate.monthName,

  // day: initialDate.day,
  // weekDay: initialDate.weekDay,
});

export function DateProvider({ children }: DateProviderProps) {
  const date = currentDate;
  const [year, setYear] = useState(initialDate.year);
  const [month, setMonth] = useState(initialDate.month);
  // const day = initialDate.day;

  date.setMonth(month);
  const monthName = date.toLocaleString('en-US', { month: 'long' });

  const value = {
    year,
    setYear,

    month,
    setMonth,

    monthName,

    // day,
    // weekDay,
  };

  return (
    <DateContext.Provider value={value}>
      {children}
    </DateContext.Provider>
  );
}

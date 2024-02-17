import {
  ReactNode,
  createContext,
  useState,
} from 'react';

import { 
  INITIAL_COUNTRY,
  currentDate, 
  initialDateValues, 
} from '../utils';
import { Country, Holiday } from '../types';

type DateProviderProps = {
  children: ReactNode;
};

type DateContextType = {
  year: number;
  setYear: React.Dispatch<React.SetStateAction<number>>;

  selectedMonth: number;
  setSelectedMonth: React.Dispatch<React.SetStateAction<number>>;
  
  monthName: string;

  holidays: Holiday[];
  setHolidays: React.Dispatch<React.SetStateAction<Holiday[]>>;

  countries: Country[];
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;

  selectedCountry: Country;
  setSelectedCountry: React.Dispatch<React.SetStateAction<Country>>;
};

export const DateContext = createContext<DateContextType>({
  year: initialDateValues.year,
  setYear: () => {},

  selectedMonth: initialDateValues.month,
  setSelectedMonth: () => {},

  monthName: initialDateValues.monthName,

  holidays: [],
  setHolidays: () => {},

  countries: [],
  setCountries: () => {},

  selectedCountry: INITIAL_COUNTRY,
  setSelectedCountry: () => {},
});

export function DateProvider({ children }: DateProviderProps) {
  const date = currentDate;

  const [year, setYear] = useState(initialDateValues.year);
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState(INITIAL_COUNTRY);

  const [selectedMonth, setSelectedMonth] = useState(initialDateValues.month);

  date.setMonth(selectedMonth);
  const monthName = date.toLocaleString('en-US', { month: 'long' });

  const value = {
    year,
    setYear,

    selectedMonth,
    setSelectedMonth,

    monthName,

    holidays,
    setHolidays,

    countries,
    setCountries,

    selectedCountry,
    setSelectedCountry,
  };

  return (
    <DateContext.Provider value={value}>
      {children}
    </DateContext.Provider>
  );
}

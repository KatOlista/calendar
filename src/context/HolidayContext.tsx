import {
  ReactNode,
  createContext,
  useState,
} from 'react';

import { 
  INITIAL_COUNTRY,
} from '../utils';
import { Country, Todo } from '../types';

type HolidayProviderProps = {
  children: ReactNode;
};

type HolidayContextType = {
  holidays: Todo[];
  setHolidays: React.Dispatch<React.SetStateAction<Todo[]>>;

  countries: Country[];
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;

  selectedCountry: Country;
  setSelectedCountry: React.Dispatch<React.SetStateAction<Country>>;
};

export const HolidayContext = createContext<HolidayContextType>({
  holidays: [],
  setHolidays: () => {},

  countries: [],
  setCountries: () => {},

  selectedCountry: INITIAL_COUNTRY,
  setSelectedCountry: () => {},
});

export function DateProvider({ children }: HolidayProviderProps) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [holidays, setHolidays] = useState<Todo[]>([]);
  const [selectedCountry, setSelectedCountry] = useState(INITIAL_COUNTRY);

  const value = {
    holidays,
    setHolidays,

    countries,
    setCountries,

    selectedCountry,
    setSelectedCountry,
  };

  return (
    <HolidayContext.Provider value={value}>
      {children}
    </HolidayContext.Provider>
  );
}

import { Holiday } from '../types';
import { HOLIDAY_URL, client } from '../utils';

export const getHolidays = (year: number, countryCode: string) => {
  return client.getHolidays<Holiday[]>(`${HOLIDAY_URL}/${year}/${countryCode}`);
};

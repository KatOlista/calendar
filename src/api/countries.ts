import { CountryFromServer } from '../types';
import { COUNTRY_URL, client } from '../utils';

export const getCountries = () => {
  return client.getCountries<CountryFromServer[]>(COUNTRY_URL);
};

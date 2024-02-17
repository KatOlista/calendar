import Select, { StylesConfig } from 'react-select';
import { DateContext } from '../../context';
import { useContext } from 'react';
import { Country } from '../../types';

const customStyle = () => ({
  backgroundColor: '#E3E4E6',
  height: 40,
  width: 150,
  ':hover': {
    backgroundColor: '#EEEFF1',
    border: '2px solid #2684FF',
  },
});

const colourStyles: StylesConfig = {
  control: (styles) => ({ ...styles, ...customStyle() }),
};

export const DropDown = () => {
  const {
    selectedCountry,
    setSelectedCountry,
    countries,
  } = useContext(DateContext);

  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={selectedCountry}
        styles={colourStyles}
        name="country"
        options={countries}
        onChange={(option) => setSelectedCountry(option as Country)}
      />
    </>
  );
};

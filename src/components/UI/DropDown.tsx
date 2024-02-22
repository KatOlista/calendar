import Select, { StylesConfig } from 'react-select';

import { DropDownListElement } from '../../types';

const customStyle = () => ({
  backgroundColor: '#E3E4E6',
  height: 40,
  minWidth: 280,
  ':hover': {
    backgroundColor: '#EEEFF1',
    border: '2px solid #2684FF',
  },
});

const dropDownStyles: StylesConfig = {
  control: (styles) => ({ ...styles, ...customStyle() }),
};

type Props = {
  options: DropDownListElement[],
  placeholder: string,
  selectedOption?: DropDownListElement | null,
  setSelectedOption?: React.Dispatch<React.SetStateAction<DropDownListElement>> | (() => void),
  selectedOptions?: DropDownListElement[] | null,
  setSelectedOptions?: React.Dispatch<React.SetStateAction<DropDownListElement[]>> | (() => void),
  isMulti?: boolean,
};

export const DropDown: React.FC<Props> = ({
  options,
  placeholder,
  selectedOption = null,
  setSelectedOption = () => {},
  selectedOptions = null,
  setSelectedOptions = () => {},
  isMulti = false,
}) => {

  const defaultValue = selectedOption
    ? selectedOption
    : selectedOptions;

  return (
    <>
      <Select
        placeholder={placeholder}
        className="basic-single"
        classNamePrefix="select"
        defaultValue={defaultValue}
        styles={dropDownStyles}
        name={placeholder}
        isMulti={isMulti}
        options={options}
        onChange={(option) => {
          return selectedOption
            ? setSelectedOption(option as DropDownListElement)
            : setSelectedOptions(option as DropDownListElement[]);
        }}
      />
    </>
  );
};

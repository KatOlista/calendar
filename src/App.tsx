import { createUseStyles } from "react-jss";
import { useContext, useEffect } from "react";
import { v4 as uuid } from 'uuid';

import { Calendar, Footer, Header } from "./components";
import { DateContext } from "./context";
import { getCountries, getHolidays } from "./api";

const useStyles = createUseStyles({
  myApp: {
    width: '100vw',
    maxHeight: '100vh',
    display: 'grid',
    // gridTemplateRows: '1fr 4fr 1fr',
    backgroundColor: '#EEEFF1',
    color: '#213547',
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    lineHeight: 1.5,
    fontWeight: 400,
  },
  main: {
    display: 'grid',
    gridTemplateColumns: '1fr ',
  },
});

export const App = () => {
  const classes = useStyles();

  const { 
    year,
    setCountries,
    setHolidays, 
    selectedCountry,
  } = useContext(DateContext);

  useEffect(() => {
    getCountries()
      .then((dataFromServer) => {
        setCountries(dataFromServer.map(country => {
          return {
            value: country.countryCode, label: country.name
        }}));
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  useEffect(() => {
    getHolidays(year, selectedCountry.value)
      .then((dataFromServer) => {
        setHolidays(dataFromServer.map(holiday => {
          return {
            id: uuid(),
            date: holiday.date,
            name: holiday.name,
            labelColors: ['transparent'],
        }}));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedCountry.value, year]);
  
  return(
    <div className={classes.myApp}>
      <Header />

      <Calendar />

      <Footer />
    </div>
)};

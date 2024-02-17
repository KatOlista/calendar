import { createUseStyles } from "react-jss";

import { Calendar, Header } from "./components";
import { useContext, useEffect } from "react";
import { DateContext } from "./context";
import { getCountries } from "./api/countries";
import { getHolidays } from "./api/holidays";

const useStyles = createUseStyles({
  myApp: {
    width: '100vw',
    height: '100vh',
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    backgroundColor: '#EEEFF1',
    color: '#213547',
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    lineHeight: 1.5,
    fontWeight: 400,
  }
});

export const App = () => {
  const classes = useStyles();

  const { 
    year,
    setCountries,
    holidays,
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
      });
  }, []);

  useEffect(() => {
    getHolidays(year, selectedCountry.value)
      .then((dataFromServer) => {
        setHolidays(dataFromServer);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedCountry.value, year]);

  console.log('holidays', holidays);
  
  return(
    <div className={classes.myApp}>
      <Header />
      
      <Calendar />
    </div>
)};

import { createUseStyles } from "react-jss";

import { Calendar, Header } from "./components";

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
  
  return(
    <div className={classes.myApp}>
      <Header />
      
      <Calendar />
    </div>
)};

import {createUseStyles} from 'react-jss';
// import { useContext } from 'react';
// import cn from 'classnames';

const useStyles = createUseStyles({
  celebrateList: {
    // margin: '10px auto',
    // maxHeight: '70%',
    // overflow: 'hidden',
    // borderRadius: 5,
    // backgroundColor: '#FFFFFF',
  },
});

// type Props = {
// };

// export const TodoList: React.FC<Props> = ({ todo }) => {
export const HolidayList = () => {
  const classes = useStyles();
  
  return (
    <ul className={classes.celebrateList}>
    </ul>
  );
};

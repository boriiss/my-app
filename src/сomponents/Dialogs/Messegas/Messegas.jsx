import classes from './Messegas.module.css';

const Messegas = (props) => {
  return (
    <div className={classes.message}>{props.message}</div>
  );
}

export default Messegas;
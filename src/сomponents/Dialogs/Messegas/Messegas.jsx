import classes from './Messegas.module.css';

const Messegas = (props) => {
  return (
    <div className={classes.message}><span>{props.message}</span></div>
  );
}

export default Messegas;
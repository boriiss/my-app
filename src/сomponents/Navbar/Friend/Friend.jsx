import classes from './Friend.module.css';

const Friend = (props) => {
  return (
    <div className={classes.friend}>
        <span></span>
        <div>
            {props.friend}
        </div>
    </div>
  );
}

export default Friend;
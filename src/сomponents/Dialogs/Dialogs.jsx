import classes from './Dialogs.module.css';

const Dialogs = () => {
    return (
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
          <div className={classes.dialog + ' '  + classes.active}>Dima</div>
          <div className={classes.dialog}>Sasha</div>
          <div className={classes.dialog}>Alexei</div>
          <div className={classes.dialog}>Olya</div>
          <div className={classes.dialog}>Ivan</div>
          <div className={classes.dialog}>Gosh</div>
        </div>
        <div className={classes.messegas}>
          <div className={classes.message}>Hello</div>
          <div className={classes.message}>Lorem.</div>
          <div className={classes.message}>Lorem ipsum dolor sit amet.</div>
          <div className={classes.message}>Lorem ipsum dolor sit amet consectetur.</div>
          <div className={classes.message}>Lorem, ipsum.</div>
          <div className={classes.message}>Lorem ipsum dolor sit.</div>
        </div>
      </div>
    );
}

export default Dialogs;
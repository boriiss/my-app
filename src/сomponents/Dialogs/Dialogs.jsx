import classes from './Dialogs.module.css';
import DialogsItems from './DialogsItems/DialogsItems';
import Messegas from './Messegas/Messegas';

const Dialogs = (props) => {

    

    let dialogsElements = props.dialogs.map( d => <DialogsItems name={d.name} id={d.id} /> );
    
    let messegasElements = props.messegas.map( m => <Messegas message={m.message} /> );

    return (
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
          {dialogsElements}
        </div>
        <div className={classes.messegas}>
          {messegasElements}
        </div>
      </div>
    );
}

export default Dialogs;
import './App.css';
import Header from './сomponents/Header/Header';
import Navbar from './сomponents/Navbar/Navbar';
import Profile from './сomponents/Profile/Profile';
import {Route, Routes} from "react-router-dom";
import DialogsContainer from './сomponents/Dialogs/DialogsContainer';

const App = (props) => {
  return (
      <div className="wrapper">
        <Header />
        <Navbar state={props.state.sidebar}/>
        <div className="content">
        <Routes>
          <Route path='/dialogs/*' element={<DialogsContainer
            store={props.store}
          />} />
          <Route exact path='/profile' element={<Profile 
            store={props.store}
          />} />
        </Routes>
        </div>
      </div>
  );
}

export default App;

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
        <Navbar />
        <div className="content">
        <Routes>
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route exact path='/profile' element={<Profile />} />
        </Routes>
        </div>
      </div>
  );
}

export default App;

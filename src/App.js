import './App.css';
import Header from './сomponents/Header/Header';
import Profile from './сomponents/Profile/Profile';
import {Route, Routes} from "react-router-dom";
import DialogsContainer from './сomponents/Dialogs/DialogsContainer';
import NavbarContainer from './сomponents/Navbar/NavbarContainer';

const App = (props) => {
  return (
      <div className="wrapper">
        <Header />
        <NavbarContainer />
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

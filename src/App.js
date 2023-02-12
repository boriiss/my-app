import './App.css';
import Header from './сomponents/Header/Header';
import {Route, Routes} from "react-router-dom";
import DialogsContainer from './сomponents/Dialogs/DialogsContainer';
import NavbarContainer from './сomponents/Navbar/NavbarContainer';
import UsersContainer from './сomponents/Users/UsersContainer';
import ProfileContainer from './сomponents/Profile/ProfileContainer';

const App = (props) => {
  return (
      <div className="wrapper">
        <Header />
        <NavbarContainer />
        <div className="content">
        <Routes>
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route exact path='/profile/*' element={<ProfileContainer />} />
          <Route exact path='/users' element={<UsersContainer />} />
        </Routes>
        </div>
      </div>
  );
}

export default App;

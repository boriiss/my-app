import './App.css';
import {Route, Routes} from "react-router-dom";
import DialogsContainer from './сomponents/Dialogs/DialogsContainer';
import NavbarContainer from './сomponents/Navbar/NavbarContainer';
import UsersContainer from './сomponents/Users/UsersContainer';
import ProfileContainer from './сomponents/Profile/ProfileContainer';
import HeaderContainer from './сomponents/Header/HeaderContainer';
import LoginPage from './сomponents/Login/Login';

const App = (props) => {
  return (
      <div className="wrapper">
        
        <HeaderContainer />
        <NavbarContainer />
        <div className="content">
        <Routes>
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/profile' element={<ProfileContainer />} />
          <Route path='/profile/:userId' element={<ProfileContainer />} />
          <Route exact path='/users' element={<UsersContainer />} />
          <Route exact path='/login' element={<LoginPage />} />
        </Routes>
        </div>
      </div>
  );
}

export default App;

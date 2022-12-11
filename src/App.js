import './App.css';
import Header from './сomponents/Header/Header';
import Navbar from './сomponents/Navbar/Navbar';
import Profile from './сomponents/Profile/Profile';
import Dialogs from './сomponents/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navbar />
        <div className="content">
        <Routes>
          <Route path='/dialogs/*' element={<Dialogs />} />
          <Route exact path='/profile' element={<Profile />} />
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

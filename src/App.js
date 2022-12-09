import './App.css';
import Header from './сomponents/Header/Header';
import Navbar from './сomponents/Navbar/Navbar';
import Profile from './сomponents/Profile/Profile';
import Dialogs from './сomponents/Dialogs/Dialogs';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <div className="content">
        <Dialogs />
        {/* <Profile /> */}
      </div>
      
    </div>
  );
}

export default App;

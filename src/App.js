import './App.css';
import Header from './сomponents/Header';
import Navbar from './сomponents/Navbar';
import Profile from './сomponents/Profile';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;

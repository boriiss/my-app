import './App.css';
import Header from './сomponents/Header/Header';
import Navbar from './сomponents/Navbar/Navbar';
import Profile from './сomponents/Profile/Profile';
import Dialogs from './сomponents/Dialogs/Dialogs';
import {Route, Routes} from "react-router-dom";

const App = (props) => {
  return (
      <div className="wrapper">
        <Header />
        <Navbar state={props.state.sidebar}/>
        <div className="content">
        <Routes>
          <Route path='/dialogs/*' element={<Dialogs 
            state={props.state.messagePage}
            addMessage={props.addMessage}
            updateNewMessageText={props.updateNewMessageText}
          />} />
          <Route exact path='/profile' element={<Profile 
            profilePage={props.state.profilePage} 
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
          />} />
        </Routes>
        </div>
      </div>
  );
}

export default App;

import React, { Suspense, lazy } from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import NavbarContainer from './сomponents/Navbar/NavbarContainer';
import DialogsContainer from './сomponents/Dialogs/DialogsContainer';
import UsersContainer from './сomponents/Users/UsersContainer';
import HeaderContainer from './сomponents/Header/HeaderContainer';
import LoginPage from './сomponents/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import withRouter from './utils/withRouter';
import Preloader from './сomponents/common/Preloader/Preloader';

const ProfileContainer = React.lazy(() => import('./сomponents/Profile/ProfileContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if(!this.props.initialized){
      return <Preloader />
    }
    return (
      <div className="wrapper">
        <HeaderContainer />
        <NavbarContainer />
        <div className="content">
        <Suspense fallback={<Preloader />}>
          <Routes basename={process.env.PUBLIC_URL}>
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/profile' element={<ProfileContainer />} />
            <Route path='/profile/:userId' element={<ProfileContainer />} />
            <Route exact path='/users' element={<UsersContainer />} />
            <Route exact path='/login' element={<LoginPage />} />
          </Routes>
        </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default compose(
  connect(mapStateToProps, {initializeApp}),
  withRouter
)(App);

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus } from './../../redux/profile-reducer';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';
import withRouter from '../../utils/withRouter';
import { Navigate } from 'react-router-dom';

class ProfileContainer extends PureComponent {
  
  componentDidMount() {
    let userId = this.props.router.params.userId;
    
    if(!userId) {
      userId = this.props.authorizedUserId;
      if(!userId){
        userId = 27935;
        <Navigate to={"/login"} />;
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps != this.props && nextState != this.state;
  // }

  render() {

    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus})
)(ProfileContainer);
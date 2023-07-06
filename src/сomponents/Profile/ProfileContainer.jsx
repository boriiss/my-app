import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus, savePhoto } from './../../redux/profile-reducer';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';
import withRouter from '../../utils/withRouter';
import { Navigate } from 'react-router-dom';

class ProfileContainer extends PureComponent {

  refresrProfile() {
    let userId = this.props.router.params.userId;
    
    if(!userId) {
      userId = this.props.authorizedUserId;
      if(!userId){
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
  
  componentDidMount() {
    this.refresrProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.router.params.userId != prevProps.router.params.userId) {
      this.refresrProfile();
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps != this.props && nextState != this.state;
  // }

  render() {

    return (
      <Profile {...this.props} 
        isOwner={!this.props.router.params.userId}  
        profile={this.props.profile} 
        status={this.props.status} 
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}/>
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
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto})
)(ProfileContainer);
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile } from './../../redux/profile-reducer';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { useLocation, useNavigate, useParams } from "react-router-dom";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.router.params.userId;
    
    if(!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId)
  }


  render() {

    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}



function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
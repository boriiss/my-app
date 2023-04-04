import React from 'react';
import { getCurrentPage, getFollowingIsProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from './../../redux/users-selectors';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress, requestUsers } from './../../redux/users-reducer';
import Users from './Users';
import Preloader from './../common/Preloader/Preloader';
import { usersAPI } from './../../api/api';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize);
  }

  render() {
    return <>
       { this.props.isFetching ? <Preloader /> : null}
       <Users totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  onPageChanged={this.onPageChanged}
                  users={this.props.users}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}
                  toggleFollowingProgress={this.props.toggleFollowingProgress}
                  followingInProgress={this.props.followingInProgress}
    />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingIsProgress(state)
  }
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress, requestUsers})
  )(UsersContainer);
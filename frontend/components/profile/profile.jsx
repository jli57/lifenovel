import React from 'react';
import FriendIndexContainer from '../friends/friend_index_container';
import PostIndexContainer from '../posts/post_index_container';
import { ProtectedRoute } from '../../util/route_util';

class Profile extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts({ user_ids: [this.props.match.params.userId], offset: 0, limit: 5} );
  }

  componentWillReceiveProps(nextProps) {
    if ( this.props.match.params.userId !== nextProps.match.params.userId  ) {
      this.props.fetchUsers([parseInt(nextProps.match.params.userId)]);
    }
  }

  render() {
    const { currentUser, profileUser } = this.props;

    return (
      <div className="profile">
        <div className="profile-info">
          <h1>{ `${profileUser.first_name} ${profileUser.last_name}` }</h1>
          <img className="profile-photo" src={ profileUser.profile_photo } />
          <span>Hi, my name is { profileUser.first_name }</span>
        </div>
        <ProtectedRoute exact path="/:userId" component={FriendIndexContainer}/>
        <ProtectedRoute exact path="/:userId" component={PostIndexContainer}/>
      </div>
    );
  }
}

export default Profile;

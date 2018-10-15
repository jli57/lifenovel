import React from 'react';
import FriendIndexContainer from '../friends/friend_index_container';
import PostIndexContainer from '../posts/post_index_container';
import { ProtectedRoute } from '../../util/route_util';
import ProfileHeader from './profile_header';
import PageNotFound from '../main/page_not_found';

class Profile extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchUsers([this.props.match.params.userId]);
  }

  componentWillReceiveProps(nextProps) {
    if ( this.props.match.params.userId !== nextProps.match.params.userId &&
      !this.props.profileUser ) {
      this.props.fetchUsers([parseInt(nextProps.match.params.userId)]);
    }
  }

  render() {
    const { currentUser, profileUser } = this.props;

    if ( profileUser === undefined ) return (
      <PageNotFound />
    );

    return (
      <div className="profile">
        <ProfileHeader profileUser={ profileUser }/>
        <div className="profile-content">
          <aside>
            <FriendIndexContainer />
          </aside>
          <section>
            <PostIndexContainer />
          </section>
        </div>
      </div>
    );
  }
}

export default Profile;

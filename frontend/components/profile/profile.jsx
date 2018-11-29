import React from 'react';
import FriendIndexContainer from '../friends/friend_index_container';
import PostIndexContainer from '../posts/post_index_container';
import AboutContainer from '../about/about_container';
import ProfileHeaderContainer from './profile_header_container';
import { BeatLoader } from 'react-spinners';

class Profile extends React.Component {

  constructor(props) {
    super(props);

    if ( window.performance ) {
      if ( performance.navigation.type === 1 ) {
        // console.log("Page reloaded");
      }
    }

  }

  componentDidMount() {
    this.props.fetchUsers([this.props.match.params.userId]);
  }

  componentWillReceiveProps(nextProps) {
    if ( this.props.match.params.userId !== nextProps.match.params.userId &&
      !this.props.profileUser ) {
      this.props.fetchUsers([Number(nextProps.match.params.userId) || 0]);
    }
  }

  render() {
    const { profileUser, relType } = this.props;

    if ( profileUser === undefined ) return (
      <BeatLoader
      className="loader"
      color={'#3B5998'}/>
    );

    const profileContent = () => {
      return relType === "self" || relType === "friends" ? (
        <div className="profile-content">
          <aside>
            <AboutContainer />
            <FriendIndexContainer />
          </aside>
          <section>
            <PostIndexContainer />
          </section>
        </div>
      ) : null
    }

    return (
      <div className="profile">
        <ProfileHeaderContainer profileUser={ profileUser }/>
        { profileContent() }
      </div>
    );
  }
}

export default Profile;

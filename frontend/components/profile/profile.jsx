import React from 'react';
import FriendIndexContainer from '../friends/friend_index_container';
import PostIndexContainer from '../posts/post_index_container';
import AboutContainer from '../about/about_container'; 
import ProfileHeader from './profile_header';
import PageNotFound from '../main/page_not_found';

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
    const { currentUser, profileUser, relType } = this.props;

    if ( profileUser === undefined ) return (
      <PageNotFound />
    );

    return (
      <div className="profile">
        <ProfileHeader profileUser={ profileUser } currentUser={ currentUser } relType={ relType }/>
        <div className="profile-content">
          <aside>
            <AboutContainer />
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

import React from 'react';
import { Link } from 'react-router-dom';

class FriendIndexItem extends React.Component {

  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(e) {
  //   this.props.openModal("friendMenu", this.props.friend.id);
  // }

  render() {
    const friend = this.props.friend;
    return (
      <li className="friend">
        <Link to={`/${friend.id}`}>
          <img className="friend-profile-icon" src={ friend.profile_photo } />
        </Link>
      </li>
    );
  }

}

export default FriendIndexItem;

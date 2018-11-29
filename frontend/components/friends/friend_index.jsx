import React from 'react';
import FriendIndexItem from './friend_index_item';
import { Link } from 'react-router-dom';

class FriendIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers(this.props.friendIds);
  }


  render() {

    return (
      <div className="friend-index">
        <div className="friend-header">
          <div>
            <div className="icon">
              <i className="fas fa-user-friends"></i>
            </div>
            <h1>Friends</h1>
          </div>
          <Link to="/wip">Find Friends</Link>
        </div>
        <ul>
          { this.props.friends.map( friend => (
            <FriendIndexItem
              key={ friend.id }
              friend={ friend }
              />)) }
            </ul>
          </div>
        );
  }
}

export default FriendIndex;

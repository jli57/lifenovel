import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../app/assets/images/logo.png';
import moment from 'moment'; 

class CommentIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.openModal("commentMenu",{ commentId: this.props.comment.id });
  }

  render() {
    const { author_id, body, created_at } = this.props.comment;
    
    return (
      <li className="comment">
        <div>
          <img className="comment-profile-icon" src={ logo } />
        </div>
        <div>
          <div>
            <div className="comment-body">
              <Link to={ `/users/${author_id}` }>{ author_id }&nbsp;</Link>
              <span>{ body }</span>
            </div>
            <div className="comment-menu-btn" onClick={ this.handleClick }>
              <i className="fas fa-ellipsis-h"></i>
            </div>
          </div>
          <div className="comment-links">
            <button>Like</button>
            <button>Reply</button>
            <div>{ moment(created_at).fromNow() }</div>
          </div>
        </div>
      </li>
    );
  }

}
// <PostMenuModal postId={post.id}/>

export default CommentIndexItem;

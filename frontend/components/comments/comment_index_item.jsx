import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../app/assets/images/logo.png';
import moment from 'moment'; 
import CreateCommentContainer from './create_comment_container'; 

class CommentIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state  = { 
      showCreateForm: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.openCommentForm = this.openCommentForm.bind(this); 
  }

  handleClick(e) {
    this.props.openModal("commentMenu",{ commentId: this.props.comment.id });
  }

  openCommentForm(e) {
    this.setState({ showCreateForm: true })
  }

  render() {
    const { author_id, body, created_at, post_id, id, parent_id } = this.props.comment;
    
    const createCommentForm = () => (
      this.state.showCreateForm ? 
       ( <div className="create-comment-container">
          <CreateCommentContainer postId={ post_id } parentId={ id } />
        </div>
       ) : 
       null
    ); 

    return (
      <li className="comment">
        <div>
          <img className="comment-profile-icon" src={ logo } />
        </div>
        <div className="comment-right">
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
            <button onClick={ this.openCommentForm }>Reply</button>
            <div>{ moment(created_at).fromNow() }</div>
          </div>
          { createCommentForm() }
        </div>
      </li>
    );
  }
  
}
// <PostMenuModal postId={post.id}/>

export default CommentIndexItem;

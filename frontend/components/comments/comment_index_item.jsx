import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../app/assets/images/logo.png';
import moment from 'moment'; 
import CreateCommentContainer from './create_comment_container';
import EditCommentContainer from './edit_comment_container';  
import CommentIndexContainer from './comment_index_container'; 
import Modal from '../modal/modal'; 

class CommentIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state  = { 
      showCreateForm: false, 
      showEditForm: false 
    }; 
    this.handleClick = this.handleClick.bind(this);
    this.openCommentForm = this.openCommentForm.bind(this); 
    this.toggleEditForm = this.toggleEditForm.bind(this); 
  }

  handleClick(e) {
    this.props.openModal("commentMenu",{ commentId: this.props.comment.id, toggleEditForm: this.toggleEditForm });
  }

  openCommentForm(e) {
    this.setState({ showCreateForm: true })
  }

  toggleEditForm(e) {
    this.setState({ showEditForm: !this.state.showEditForm }); 
  }

  render() {
    const { author_id, body, created_at, commentable_id, id, parent_id } = this.props.comment;
    
    const createCommentForm = () => (
      this.state.showCreateForm ? 
       ( <CreateCommentContainer postId={ commentable_id } parentId={ id } />
       ) :  null
    ); 

    const editCommentForm = () => {
      return this.state.showEditForm ? 
      (
        <EditCommentContainer toggleEditForm={ this.toggleEditForm } commentId={ this.props.comment.id } />
      ) : (
        <div className="comment-and-options">
          <div className="comment-body">
            <Link to={ `/users/${author_id}` }>{ author_id }&nbsp;</Link>
            <span>{ body }</span>
          </div>
          <div className="comment-menu-btn" onClick={ this.handleClick }>
            <i className="fas fa-ellipsis-h"></i>
            <Modal modalType="commentMenu" id={ this.props.comment.id }/>
          </div>
        </div>
      )
    }; 

    return (
      <li className="comment">
         <div className="comment-content">
          <img className="comment-profile-icon" src={ logo } />
          { editCommentForm() }
          { this.state.showEditForm ?
            <div className="comment-links">
              <button onClick={ this.toggleEditForm }>Cancel</button>
            </div>
            : ( 
            <div className="comment-links">
              <button>Like</button>
              <button onClick={ this.openCommentForm }>Reply</button>
              <div>{ moment(created_at).fromNow() }</div>
            </div>
            )
          }
        </div>    
        { this.props.comment.child_comment_ids.length > 0 ? 
          <div className="child-comments" >
            <CommentIndexContainer postId={ commentable_id } parentId={ id } level={ this.props.level + 1 }/> 
          </div>
          : null  
        }
        { createCommentForm() }
      </li>
    );
  }
  
}

export default CommentIndexItem;

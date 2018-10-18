import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'; 
import CreateCommentContainer from './create_comment_container';
import EditCommentContainer from './edit_comment_container';  
import CommentIndexContainer from './comment_index_container'; 
import LikesContainer from '../likes/likes_container'; 
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
    this.handleLike = this.handleLike.bind(this); 
    this.toggleForm = this.toggleForm.bind(this); 
  }

  handleClick(e) {
    this.props.openModal("commentMenu",{ commentId: this.props.comment.id, 
      toggleForm: this.toggleForm, toggleEditForm: this.toggleEditForm });
  }

  openCommentForm(e) {
    this.setState({ showCreateForm: true })
  }

  toggleForm(formType) {
    const prop = `show${formType}Form`; 
    const val = !this.state[prop]; 
    this.setState({ [prop]: val }); 
  }

  handleLike(e) {
    const { currentUserId, comment, like } = this.props; 

    like ? 
      this.props.deleteLike(like.id) : 
      this.props.createLike({ user_id: currentUserId, likeable_id: comment.id, likeable_type: "Comment" })
  }

  render() {
    
    if ( !this.props.commentAuthor ) return null; 
    const { author_id, body, created_at, commentable_id, id } = this.props.comment;
    const { first_name, last_name } = this.props.commentAuthor; 
    const fullName = `${first_name} ${last_name}`;  

    const createCommentForm = () => (
      this.state.showCreateForm ? 
       ( <CreateCommentContainer toggleForm={ this.toggleForm } postId={ commentable_id } parentId={ id } />
       ) :  null
    ); 

    const editCommentForm = () => {
      return this.state.showEditForm ? 
      (
        <EditCommentContainer toggleForm={ this.toggleForm } commentId={ this.props.comment.id } />
      ) : (
        <div className="comment-and-options">
          <div className="comment-body">
            <Link to={ `/users/${author_id}` }>{ fullName }&nbsp;</Link>
            <span>{ body }</span>
          </div>
          <div className="comment-likes"> 
            <LikesContainer likeableId={ id } likeableType="Comment"/>
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
          <img className="comment-profile-icon" src={ this.props.commentAuthor.profile_photo } />
          { editCommentForm() }
          { this.state.showEditForm ?
            <div className="comment-links">
              <button onClick={ () => { this.toggleForm("Edit") } }>Cancel</button>
            </div>
            : ( 
            <div className="comment-links">
              <button onClick={ this.handleLike }>{ this.props.like ? "Unlike" : "Like" }</button>
              <button onClick={ this.openCommentForm }>Reply</button>
              <div>{ moment(created_at).fromNow() }</div>
            </div>
            )
          }
        </div>    
        { this.props.comment.child_comment_ids.length > 0 ? 
          <div className="child-comments" >
            <CommentIndexContainer postId={ commentable_id } parentId={ id } /> 
          </div>
          : null  
        }
        { createCommentForm() }
      </li>
    );
  }
  
}

export default CommentIndexItem;

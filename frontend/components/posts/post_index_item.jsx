import React from 'react';
import { Link } from 'react-router-dom';
import CommentIndexContainer from '../comments/comment_index_container';
import CreateCommentContainer from '../comments/create_comment_container';
import LikesContainer from '../likes/likes_container'; 
import share from '../../../app/assets/images/share.png';
import Modal from '../modal/modal'; 
import moment from 'moment'; 

class PostIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleLike = this.handleLike.bind(this); 
  }

  componentDidMount() {
    if ( this.props.postAuthor === undefined ) {
      this.props.fetchUsers([this.props.post.author_id]);
    }
    if ( this.props.pageOwner === undefined ) {
      this.props.fetchUsers([this.props.post.page_id]); 
    }
  }

  handleClick(e) {
    const pos = e.target.getBoundingClientRect(); 
    this.props.openModal("postMenu", {postId: this.props.post.id, pos, mode: "relative" });
  }

  handleLike(e) {
    const { currentUserId, post, like } = this.props; 

    like ? 
      this.props.deleteLike(like.id) : 
      this.props.createLike({ user_id: currentUserId, likeable_id: post.id, likeable_type: "Post" })
  }

  render() {
    const { post, postAuthor, like, pageOwner } = this.props;
    if ( !post  || !postAuthor || !pageOwner ) return null;

    const editText = post.created_at !== post.updated_at ? " (edited)" : "";
    const dateLog = ` ${moment(post.created_at).fromNow()} ${editText}`;
    const likeClass = like ? "like-btn-container liked" : "like-btn-container"; 

    const showFeed = () => {
      if ( this.props.pageType === "feed" && post.author_id !== post.page_id ) {
        return (
          <div className="feed-info">
            <i className="fas fa-caret-right"></i>
            <Link to={`/${post.page_id}`}>
              { `${pageOwner.first_name} ${pageOwner.last_name}`}
            </Link>
          </div>
        ); 
      }
    }

    return (
      <li className="post">
        <div className="post-header">
          <div className="post-author-info">
            <Link to={`/${post.author_id}`}>
              <img className="post-profile-icon" src={ postAuthor.profile_photo } />
            </Link>
            <div>
              <div className="post-author-name">
                <Link to={`/${post.author_id}`}>
                  { `${postAuthor.first_name} ${postAuthor.last_name}`}
                </Link>
                { showFeed() }
              </div>
              <p className="post-date">{ dateLog }</p>
            </div>
          </div>

          <div className="post-menu-btn" onClick={ this.handleClick }>
            <i className="fas fa-ellipsis-h"></i>
            <Modal modalType="postMenu" id={ post.id }/>
          </div>

        </div>

        <div className="post-body">
          { post.body }
        </div>
        <div className="post-stats">
          <LikesContainer likeableId={ post.id } likeableType="Post"/>
        </div>
        <div className="post-nav">
          <nav>
            <div onClick={ this.handleLike } className={ likeClass }>
              { like ? 
                <i className="fas fa-thumbs-up liked"></i> :
                <i className="far fa-thumbs-up"></i>
              }
              <span>  Like</span>
            </div>
            <div>
              <i className="far fa-comment-alt"></i><span>  Comment</span>
            </div>
            <div>
              <img className="share-icon" src={ share } /> <span>  Share</span>
            </div>
          </nav>
        </div>
        <div>
          <CommentIndexContainer postId={post.id} parentId={ null } />
        </div>
        <div className="create-comment-container">
          <CreateCommentContainer postId={post.id} parentId={ null } />
        </div>
      </li>
    )
  }

}

export default PostIndexItem;

// <i className="far fa-share-square">

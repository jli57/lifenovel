import React from 'react';
import { Link } from 'react-router-dom';
import CommentIndexContainer from '../comments/comment_index_container';
import CreateCommentContainer from '../comments/create_comment_container';
import share from '../../../app/assets/images/share.png';
import Modal from '../modal/modal'; 
import moment from 'moment'; 

class PostIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if ( this.props.postAuthor === undefined ) {
      this.props.fetchUsers([this.props.post.author_id]);
    }
  }

  handleClick(e) {
    const pos = e.target.getBoundingClientRect(); 
    this.props.openModal("postMenu", {postId: this.props.post.id, pos, mode: "relative" });
  }

  render() {
    const { post, postAuthor } = this.props;
    if ( !post  || !postAuthor ) return null;

    const editText = post.created_at !== post.updated_at ? " (edited)" : "";
    const dateLog = ` ${moment(post.created_at).fromNow()} ${editText}`;


    return (
      <li className="post">
        <div className="post-header">
          <div className="post-author-info">
            <Link to={`/${post.author_id}`}>
              <img className="post-profile-icon" src={ postAuthor.profile_photo } />
            </Link>
            <div>
              <Link to={`/${post.author_id}`}>
                { `${postAuthor.first_name} ${postAuthor.last_name}`}
              </Link>
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
        <div>
          <nav>
            <div>
              <i className="far fa-thumbs-up"></i><span>  Like</span>
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
          <CommentIndexContainer postId={post.id} />
        </div>
        <div>
          <CreateCommentContainer postId={post.id} />
        </div>
      </li>
    )
  }

}

export default PostIndexItem;

// <i className="far fa-share-square">

import React from 'react';
import { Link } from 'react-router-dom';
import PostMenuModal from '../modal/post_menu_modal';
import CommentIndexContainer from '../comments/comment_index_container';
import CreateCommentContainer from '../comments/create_comment_container';

class PostIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.openModal("postMenu", this.props.post.id);
  }

  render() {
    const post = this.props.post;
    const createdAt = new Date(post.created_at).toLocaleDateString("en-US");
    const updatedAt = new Date(post.updated_at).toLocaleDateString("en-US");
    const editText = post.created_at !== post.updated_at ? " (edited)" : "";

    const dateLog = ` ${createdAt} ${editText}`;

    return (
      <li className="post">
        <div className="flex">
          <div>{ post.author_id } wrote on { dateLog }</div>

          <div className="post-menu-btn" onClick={ this.handleClick }>
            <i className="fas fa-ellipsis-h"></i>
            <PostMenuModal postId={post.id}/>
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
              <i className="far fa-share-square"></i><span>  Share</span>
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

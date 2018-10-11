import React from 'react';

class PostIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const post = this.props.post;
    return (
      <li className="post">
        <div className="flex">
          <div>{ post.author_id } wrote: { post.created_at }</div>
          <i className="fas fa-ellipsis-h"></i>
        </div>
        <div className="post-body">
          { post.body }
        </div>
        <nav className="flex">
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
      </li>
    )
  }

}

export default PostIndexItem;

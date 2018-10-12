import React from 'react';
import { Link } from 'react-router-dom';


class PostIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    }
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick(e) {
    this.setState({ showMenu: !this.state.showMenu });
  }


  render() {
    const post = this.props.post;
    return (
      <li className="post">
        <div className="flex">
          <div>{ post.author_id } wrote: { new Date(post.created_at).toLocaleDateString("en-US") }</div>
          <div className={ "post-menu" }
              onClick={ this.handleMenuClick }>
            <i className="fas fa-ellipsis-h">
            </i>
            <ul className={ this.state.showMenu ? "" : "hidden" }>
              <li>
                <Link to="/edit">Edit Post</Link>
              </li>
              <li>
                <button>Delete</button>
              </li>
            </ul>
          </div>
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

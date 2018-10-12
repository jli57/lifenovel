import React from 'react';
import { Link } from 'react-router-dom';


class PostIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    }
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleMenuClick(e) {
    if ( !this.state.showMenu ) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
    this.setState({ showMenu: !this.state.showMenu });
  }

  handleOutsideClick(e) {
    if ( this.node.contains(e.target)) {
      return;
    }
    this.handleMenuClick();
  }

  render() {

    const post = this.props.post;
    return (
      <li className="post">
        <div className="flex">
          <div>{ post.author_id } wrote: { new Date(post.created_at).toLocaleDateString("en-US") }</div>
          <div className={ "post-menu" }
              onClick={ this.handleMenuClick }
              ref={ node => { this.node = node } }>
            <i className="fas fa-ellipsis-h">
            </i>
            <ul className={ this.state.showMenu ? "" : "hidden" }>
              <li>
                <Link to="/edit">Edit Post</Link>
              </li>
              <li onClick={ () => this.props.deletePost(post.id) } >
                <button >Delete</button>
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

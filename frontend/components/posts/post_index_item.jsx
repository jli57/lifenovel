import React from 'react';

class PostIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const post = this.props.post;
    return (
      <li className="post">
        <div>
          { this.props.currentUser.first_name } wrote:
        </div>
        <div>
          { post.body }
        </div>
      </li>
    )
  }

}

export default PostIndexItem;

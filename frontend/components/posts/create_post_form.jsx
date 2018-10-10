import React from 'react';

class CreatePostForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPost(this.state)
      .then( () => this.state = this.props.post )
      .then( () => this.props.fetchPosts() );
  }

  update(prop) {
    return (e) => {
      this.setState({ [prop]: e.target.value });
    }
  }

  render() {
    return (
      <div className="create-post-container">
        <ul className="create-post-nav">
          <li>
            <i className="fas fa-pencil-alt"></i><span> Make Post</span>
          </li>
          <li>
            <i className="far fa-images"></i><span> Photos </span>
          </li>
        </ul>

        <form className="create-post-form" onSubmit={ this.handleSubmit }>
          <textarea
            onChange={ this.update("body")}
            value={this.state.body}
            placeholder={`What's on your mind, ${this.props.currentUser.first_name}?`}></textarea>
          <input className="submit-btn" type="submit" value="Save"/>
        </form>
      </div>
    )
  }
}

export default CreatePostForm;

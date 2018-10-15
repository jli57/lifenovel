import React from 'react';

class PostForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = Object.assign({}, this.state);
    if ( !post.page_id ) { post.page_id = this.props.pageId }
    this.setState({ body: ""},
      () => this.props.submitAction(post)
    );
  }

  update(prop) {
    return (e) => {
      this.setState({ [prop]: e.target.value });
    }
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <div>
          <img className="post-profile-icon" src={ this.props.currentUser.profile_photo } />
          <textarea
            onChange={ this.update("body")}
            value={this.state.body}
            placeholder={this.props.placeholderText}></textarea>
        </div>
        <input type="submit" value="Save"/>
      </form>
    )
  }
}

export default PostForm;

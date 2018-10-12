import React from 'react';

class PostForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitAction(this.state)
      .then( () => this.setState(this.props.post) )
      .then( () => this.props.fetchPosts() );
  }

  update(prop) {
    return (e) => {
      this.setState({ [prop]: e.target.value });
    }
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <textarea
          onChange={ this.update("body")}
          value={this.state.body}
          placeholder={`What's on your mind, ${this.props.currentUser.first_name}?`}></textarea>
        <input type="submit" value="Save"/>
      </form>
    )
  }
}

export default PostForm;

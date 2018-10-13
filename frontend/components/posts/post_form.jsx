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
    this.setState({ body: ""}); 
    this.props.submitAction(post);
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

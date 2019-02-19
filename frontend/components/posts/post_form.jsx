import React from 'react';

class PostForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkSubmit = this.checkSubmit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if ( nextProps.post.page_id !== this.props.post.page_id ) {
      this.setState(nextProps.post);
    }
  }

  handleSubmit(e) {
    if ( e ) {
      e.preventDefault();
    }
    const post = Object.assign({}, this.state);
    if ( this.state.body !== "" ) {
      this.props.submitAction(post).then( () => {
        this.setState({ body: "" });
      })
    }
  }

  checkSubmit(e) {
    if ( e.which === 13 && !e.shiftKey && e.target.value.trim() !== "" ) {
      this.handleSubmit();
      return false;
    }
  }

  handleKeyDown(e) {
    const span = document.getElementById("span");
    span.textContent = e.target.value;
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
          <div className="textarea-container">
            <pre><span id="span"></span></pre>
            <textarea id="post-form-body"
              onChange={ this.update("body")}
              onKeyPress={ this.checkSubmit }
              onKeyDown={ this.handleKeyDown }
              value={this.state.body}
              placeholder={this.props.placeholderText}>
            </textarea>
          </div>
        </div>
        <input type="submit" value="Save"/>
      </form>
    )
  }
}

export default PostForm;

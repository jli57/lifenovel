import React from 'react';

class CommentForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.comment;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = Object.assign({}, this.state);
    comment.commentable_id = comment.post_id;
    comment.commentable_type = "Post"; 
    this.setState({ body: "" },
      () => this.props.submitAction(comment)
    );
  }

  update(prop) {
    return (e) => {
      this.setState({ [prop]: e.target.value });
    }
  }

  render() {
    return (
      <form className="comment-form" onSubmit={ this.handleSubmit } >
        <div>
          <input
            type="text"
            onChange={ this.update("body")}
            value={this.state.body}
            placeholder="Write a comment..." />
        </div>
      </form>
    )
  }
}

export default CommentForm;

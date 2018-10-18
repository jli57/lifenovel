import React from 'react';

class CommentForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = this.props.comment;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkSubmit = this.checkSubmit.bind(this); 
  }

  handleSubmit(e) {
    if ( e ) {
      e.preventDefault();
    }
    const comment = Object.assign({}, this.state);
    comment.commentable_id = comment.post_id;
    comment.commentable_type = "Post"; 
    this.setState({ body: "" },
      () => {
        this.props.submitAction(comment)
        .then( () => this.props.formType == "edit" ? this.props.toggleEditForm() : null )
        .then( () => this.props.fetchComment(comment.parent_id) )
      }
    ); 
  }

  update(prop) {
    return (e) => {
      this.setState({ [prop]: e.target.value });
    }
  }

  checkSubmit(e) {
    if ( e.which === 13 && !e.shiftKey ) {
      this.handleSubmit(); 
      return false; 
    }
  }

  render() {
    return (
      <form className="comment-form" onSubmit={ this.handleSubmit } >
        <div>
          <textarea
            type="submit"
            onChange={ this.update("body")}
            onKeyPress={ this.checkSubmit }
            value={this.state.body}
            placeholder="Write a comment..."></textarea>
        </div>
      </form>
    )
  }
}

export default CommentForm;

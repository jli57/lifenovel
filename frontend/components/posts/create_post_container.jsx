import React from 'react';
import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';
import { withRouter } from 'react-router-dom';
import { getRelType } from '../../reducers/selectors';
import PostPhotoFormContainer from './post_photo_form_container'; 

class CreatePostContainer extends React.Component {

  constructor(props) {
    super(props); 
    this.state = {
      postType: "text"
    }
    this.updatePostType = this.updatePostType.bind(this); 
  }

  updatePostType(postType) {
    return (e) => {
      this.setState({postType}); 
    }
  }

  render() {
    const { post, currentUser, submitAction, profileUser } = this.props; 

    const placeholderText = (
      ( currentUser.id === profileUser.id ) ?
        `What's on your mind, ${currentUser.first_name}` :
        `Write something to ${profileUser.first_name}...`
    );

    const createForm = (
      <div className="create-post">
        <nav>
          <ul>
            <li onClick={ this.updatePostType("text") }>
              <div>
                <i className="fas fa-pencil-alt" ></i><span>Make Post</span>
              </div>
            </li>
            <li onClick={ this.updatePostType("image") }>
              <div>
                <i className="fas fa-camera" ></i><span>Photos</span>
              </div>
            </li>
          </ul>
        </nav>
        { this.state.postType === "text" ? 
          <PostForm
            post={post}
            currentUser={currentUser}
            submitAction={submitAction}
            placeholderText={ placeholderText }
          /> : 
          <PostPhotoFormContainer updatePostType={ this.updatePostType }/> }
      </div>
    );

    return createForm; 
  }
}


const mapStateToProps = ( { session, entities: { users, userRelationships } }, ownProps ) => {
  const pageId = ownProps.location.pathname === "/" ? session.id : Number(ownProps.match.params.userId) || 0;
  return {
    post: {  author_id: session.id, body: "", page_id: pageId },
    currentUser: users[session.id],
    profileUser: users[pageId],
    formType: "create",
  };
}

const mapDispatchToProps = dispatch => ({
  submitAction: (post) => dispatch(createPost(post))
});

export default withRouter(connect( mapStateToProps, mapDispatchToProps )( CreatePostContainer ));

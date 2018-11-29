import { connect } from 'react-redux';
import { createPhotoPost } from '../../actions/post_actions';
import { withRouter } from 'react-router-dom';
import PostPhotoForm from './post_photo_form';

const mapStateToProps = ({ session, entities: { users} }, { updatePostType, pageId } )  => {
  return {
    post: {  author_id: session.id, body: "", page_id: pageId },
    currentUser: users[session.id],
    formType: "post",
    closeForm: updatePostType("text")
  };
};

const mapDispatchToProps = dispatch => ({
  submitAction: (formData) => dispatch(createPhotoPost(formData))
});

export default withRouter(connect( mapStateToProps, mapDispatchToProps )( PostPhotoForm ));

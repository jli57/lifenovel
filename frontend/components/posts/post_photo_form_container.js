import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions'; 
import { withRouter } from 'react-router-dom';
import PhotoForm from '../profile/photo_form';
import { closeModal } from '../../actions/modal_actions'; 

const mapStateToProps = ({ session, entities: { users} }, { updatePostType }) => {
  return {
    currentUser: users[session.id],
    closeForm: updatePostType("text")
  };
};

const mapDispatchToProps = dispatch => ({
  updateUser: (formData, userId) => dispatch( updateUser(formData, userId) ), 
});

export default withRouter(connect( mapStateToProps, mapDispatchToProps )( PhotoForm ));

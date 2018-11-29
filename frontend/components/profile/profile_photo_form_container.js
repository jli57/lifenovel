import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';
import PhotoForm from './photo_form';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ session, entities: { users} }) => {
  return {
    currentUser: users[session.id],
    formType: "profile"
  };
};

const mapDispatchToProps = dispatch => ({
  submitAction: (formData, userId) => dispatch( updateUser(formData, userId) ),
  closeForm: () => dispatch( closeModal() ),
});

export default withRouter(connect( mapStateToProps, mapDispatchToProps )( PhotoForm ));

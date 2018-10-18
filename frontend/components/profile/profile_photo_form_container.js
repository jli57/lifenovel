import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions'; 
import { withRouter } from 'react-router-dom';
import PhotoForm from './photo_form';

const mapStateToProps = ({ session, entities: { users} }) => {
  return {
    currentUser: users[session.id],
  };
};

const mapDispatchToProps = dispatch => ({
  updateUser: (formData, userId) => dispatch( updateUser(formData, userId) ), 
});

export default withRouter(connect( mapStateToProps, mapDispatchToProps )( PhotoForm ));

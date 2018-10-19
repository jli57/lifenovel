import { connect } from 'react-redux';
import ProfileHeader from './profile_header' 
import { openModal } from '../../actions/modal_actions'; 


const mapStateToProps = ({ session, entities: { users } }, ownProps) => ({
  profileUser: ownProps.profileUser, 
  currentUser: users[session.id],
});

const mapDispatchToProps = dispatch => ({
  openModal: (modal, modalArgs) => dispatch( openModal(modal, modalArgs)), 
});

export default connect( mapStateToProps, mapDispatchToProps )( ProfileHeader);

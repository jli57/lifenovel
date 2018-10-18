import { connect } from 'react-redux';

import SearchBar from './search_bar';
import { searchUsers } from '../../actions/user_actions'; 
import { openModal, closeModal } from '../../actions/modal_actions'; 

const mapDispatchToProps = dispatch => ({
  searchUsers: (searchText) => dispatch(searchUsers(searchText)), 
  openModal: (modal, modalArgs) => dispatch( openModal(modal, modalArgs )), 
  closeModal: () => dispatch( closeModal() ), 
});

export default connect( null, mapDispatchToProps )( SearchBar );

import { connect } from 'react-redux';

import SearchBar from './search_bar';
import { searchUsers, removeSearchUsers } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';

const mapDispatchToProps = dispatch => ({
  searchUsers: (searchText) => dispatch(searchUsers(searchText)),
  openModal: (modal, modalArgs) => dispatch( openModal(modal, modalArgs )),
  removeSearchUsers: () => dispatch(removeSearchUsers()),
});

export default connect( null, mapDispatchToProps )( SearchBar );

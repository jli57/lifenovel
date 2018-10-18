import { connect } from 'react-redux';

import SearchResults from './search_results';
import { closeModal } from '../../actions/modal_actions'; 

const mapStateToProps = ({ entities: { users }, search }) => {
  const searchUsers = search.users; 
  return {
    users: searchUsers.map( userId => users[userId] ), 
  }; 
};

const mapDispatchToProps = dispatch => ({
  searchUsers: (searchText) => dispatch(searchUsers(searchText)), 
  closeModal: () => dispatch( closeModal()),
});

export default connect( mapStateToProps, mapDispatchToProps )( SearchResults );

import { connect } from 'react-redux';

import SearchBar from './search_bar';

const mapStateToProps = (state) => ({
  posts: {}
});

// const mapDispatchToProps = dispatch => ({
//   logout: () => dispatch(logout())
// });

export default connect( mapStateToProps )( SearchBar );

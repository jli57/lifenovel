import { connect } from 'react-redux';

import SearchBar from './search_bar';

const mapStateToProps = ({ entities: { posts }}) => ({
  posts: Object.values(posts)
});

// const mapDispatchToProps = dispatch => ({
//   logout: () => dispatch(logout())
// });

export default connect( mapStateToProps )( SearchBar );

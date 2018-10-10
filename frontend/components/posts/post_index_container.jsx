import { connect } from 'react-redux';
import PostIndex from './post_index';

const mapStateToProps = ( state ) => ({
  posts: {}
});

const mapDispatchToProps = dispatch => ({

});

export default connect( mapStateToProps, null )(PostIndex);

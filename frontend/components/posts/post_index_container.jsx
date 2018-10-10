import { connect } from 'react-redux';
import PostIndex from './post_index';

const mapStateToProps = ({ entities: { posts }}) => ({
  posts: Object.values(posts)
});

const mapDispatchToProps = dispatch => ({

});

export default connect( mapStateToProps, null )(PostIndex);

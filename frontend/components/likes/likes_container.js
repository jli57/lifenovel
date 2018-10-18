import { connect } from 'react-redux';
import Likes from './likes'; 
import { filterLikes } from '../../reducers/selectors';
import { createLike, removeLike } from '../../actions/like_actions'; 

const mapStateToProps = ({ entities: { likes } }, ownProps) => {
  return {
    likes: filterLikes( ownProps.likeableId, ownProps.likeableType, likes )
  }; 
};

const mapDispatchToProps = dispatch => ({
  createLike: (like) => dispatch( createLike(like)), 
  removeLike: (likeId) => dispatch( removeLike(likeId)), 
});

export default connect( mapStateToProps, mapDispatchToProps )( Likes );

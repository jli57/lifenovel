import { connect } from 'react-redux';
import Likes from './likes'; 
import { filterLikes } from '../../reducers/selectors';

const mapStateToProps = ({ entities: { likes } }, ownProps) => {
  return {
    likes: filterLikes( ownProps.likeableId, ownProps.likeableType, likes )
  }; 
};

export default connect( mapStateToProps, null )( Likes );

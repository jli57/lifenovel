import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import PostIndexItem from './post_index_item';
import { createLike, deleteLike } from '../../actions/like_actions'; 
import { filterLikeByUser } from '../../reducers/selectors'; 

const mapStateToProps = ({ entities: { users, likes }, session }, { post, pageType }) => {
  return {
    post,
    postAuthor: users[post.author_id],
    pageOwner: users[post.page_id], 
    currentUserId: session.id,
    like: filterLikeByUser( session.id, post.id, "Post", likes)[0], 
    pageType 
  }
};

const mapDispatchToProps = dispatch => ({
  openModal: (modal, options) => dispatch( openModal(modal, options) ),
  fetchUsers: (userIds) => dispatch( fetchUsers(userIds) ),
  createLike: (like) => dispatch( createLike(like)), 
  deleteLike: (likeId) => dispatch( deleteLike(likeId)), 
});

export default connect( mapStateToProps, mapDispatchToProps )( PostIndexItem );

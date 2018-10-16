import { connect } from 'react-redux';
import { deletePost } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';
import PostMenu from './post_menu';

const mapStateToProps = ({ entities: { posts }, session, ui: { modalArgs } }) => ({
  post: posts[modalArgs.postId],
  currentUserId: session.id,
});

const mapDispatchToProps = dispatch => ({
  deletePost: (postId) => dispatch( deletePost(postId) ),
  openModal: (modal, options) => dispatch( openModal(modal, options) )
});

export default connect( mapStateToProps, mapDispatchToProps )(PostMenu);

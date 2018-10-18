import { connect } from 'react-redux';
import { deleteComment } from '../../actions/comment_actions';
import CommentMenu from './comment_menu';
import { closeModal } from '../../actions/modal_actions'; 

const mapStateToProps = ({ entities: { comments }, session, ui: { modalArgs } }) => ({
  comment: comments[modalArgs.commentId],
  currentUserId: session.id,
  toggleForm: modalArgs.toggleForm,
  toggleEditForm: modalArgs.toggleEditForm,
});

const mapDispatchToProps = dispatch => ({
  deleteComment: (commentId) => dispatch( deleteComment(commentId) ),
  closeModal: () => dispatch( closeModal() ), 
});

export default connect( mapStateToProps, mapDispatchToProps )(CommentMenu);

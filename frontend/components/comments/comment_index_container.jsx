import React from 'react';
import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { filterPostComments, countPostComments } from '../../reducers/selectors';
import { fetchPosts } from '../../actions/post_actions'; 
import { openModal } from '../../actions/modal_actions';

class CommentIndexContainer extends React.Component {
  render() {
    return (
      <CommentIndex
        comments={ this.props.comments }
        total={ this.props.total }
        postId={ this.props.postId }
        parentId={ this.props.parentId }
        openModal={ this.props.openModal }
      />
    );
  }
}

const mapStateToProps = ({ entities: { comments } }, ownProps) => {
  const { parentId, postId } = ownProps; 
  return {
    comments: filterPostComments(comments, postId, parentId),
    total: countPostComments( comments, postId ), 
    postId: postId, 
    parentId: parentId,
  }; 
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()), 
  openModal: (modal, modalArgs) => dispatch(openModal(modal, modalArgs)),
});

export default connect( mapStateToProps, mapDispatchToProps )( CommentIndexContainer );

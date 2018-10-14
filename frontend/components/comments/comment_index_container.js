import React from 'react';
import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { filterPostComments, countPostComments } from '../../reducers/selectors';
// import { openModal } from '../../actions/modal_actions';

// class PostIndexContainer extends React.Component {
//   componentDidMount() {
//     this.props.fetchPosts();
//   }
//
//   render() {
//     return (
//       <CommentIndex
//         comments={ this.props.comments }
//         currentUser={ this.props.currentUser }
//         openModal={ this.props.openModal }
//       />
//     );
//   }
// }

const mapStateToProps = ({ entities: { comments } }, ownProps) => ({
  comments: filterPostComments(comments, ownProps.postId, 4),
  total: countPostComments( comments, ownProps.postId )
});

// const mapDispatchToProps = dispatch => ({
//
// });

export default connect( mapStateToProps, null )( CommentIndex );

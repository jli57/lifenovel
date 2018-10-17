import React from 'react';
import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { filterPostComments, countPostComments } from '../../reducers/selectors';
import { fetchPosts } from '../../actions/post_actions'; 
// import { openModal } from '../../actions/modal_actions';

class CommentIndexContainer extends React.Component {
  componentDidMount() {
    // this.props.fetchPosts();
  }

  componentWillReceiveProps() {
    // this.props.fetchPosts(); 
  }

  render() {
    return (
      <CommentIndex
        comments={ this.props.comments }
        total={ this.props.total }
        postId={ this.props.postId }
        parentId={ this.props.parentId }
        level={ this.props.level }
      />
    );
  }
}

const mapStateToProps = ({ entities: { comments } }, ownProps) => {
  const { parentId, postId, level } = ownProps; 
  return {
    comments: filterPostComments(comments, postId, parentId),
    total: countPostComments( comments, postId ), 
    postId: postId, 
    parentId: parentId,
    level: level, 
  }; 
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()), 
});

export default connect( mapStateToProps, mapDispatchToProps )( CommentIndexContainer );

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
      />
    );
  }
}

const mapStateToProps = ({ entities: { comments } }, ownProps) => {
  return {
    comments: filterPostComments(comments, ownProps.postId, ownProps.parentId, 4),
    total: countPostComments( comments, ownProps.postId ), 
    postId: ownProps.postId, 
    level: ownProps.level 
  }; 
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()), 
});

export default connect( mapStateToProps, mapDispatchToProps )( CommentIndexContainer );

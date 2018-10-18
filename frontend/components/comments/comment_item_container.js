import React from 'react'; 
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import CommentIndexItem from './comment_index_item';
import { createLike, deleteLike, fetchLikes } from '../../actions/like_actions'; 
import { filterLikeByUser } from '../../reducers/selectors'; 

class CommentItemContainer extends React.Component {
  
  componentDidMount() {
    if ( this.props.commentAuthor === undefined ) {
      this.props.fetchUsers([this.props.comment.author_id]);
    }
    if ( !this.props.like ) { 
      fetchLikes({ likeable_id: this.props.comment.id, likeable_type: "Comment" }); 
    }
  }
 
  // componentWillReceiveProps {
  //   if ( this.props.commentAuthor === undefined ) {
  //     this.props.fetchUsers([this.props.comment.author_id]);
  //   }
  //   fetchLikes({ likeable_id: this.props.comment.id, likeable_type: "Comment" })
  // }

  
  render() {
    const { comment, commentAuthor, currentUserId, like, openModal, createLike, deleteLike } = this.props; 
    return (
      <CommentIndexItem
        comment={ comment }
        commentAuthor={ commentAuthor }
        currentUserId={ currentUserId }
        like={ like }
        openModal={ openModal }
        createLike={ createLike }
        deleteLike={ deleteLike } />
    ); 
  }
}

const mapStateToProps = ({ entities: { users, likes }, session }, { comment }) => {
  return {
    comment,
    commentAuthor: users[comment.author_id],
    currentUserId: session.id,
    like: filterLikeByUser( session.id, comment.id, "Comment", likes)[0]
  }
};

const mapDispatchToProps = dispatch => ({
  openModal: (modal, options) => dispatch( openModal(modal, options) ),
  fetchUsers: (userIds) => dispatch( fetchUsers(userIds) ),
  createLike: (like) => dispatch( createLike(like)), 
  deleteLike: (likeId) => dispatch( deleteLike(likeId)), 
  fetchLikes: (options) => dispatch( fetchLikes(options)),
});

export default connect( mapStateToProps, mapDispatchToProps )( CommentItemContainer );

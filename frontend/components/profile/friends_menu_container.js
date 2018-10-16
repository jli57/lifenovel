import { connect } from 'react-redux';
import { createUserRelationship, updateUserRelationship, deleteUserRelationship }
  from '../../actions/user_relationship_actions';
import { withRouter } from 'react-router-dom';
import { getRelType, getRelationship } from '../../reducers/selectors';
import FriendsMenu from './friends_menu';

const mapStateToProps = ({ session, entities: { users, userRelationships } }, ownProps) => {
  const profileId = Number(ownProps.match.params.userId) || 0;
  const rel = getRelationship(session.id, profileId, userRelationships);

  return {
    relType: getRelType( session.id, profileId, userRelationships ),
    userRelationship: rel ? rel : { user1_id: session.id, user2_id: profileId, rel_type: "pending" }
  };
};

const mapDispatchToProps = dispatch => ({
  createUserRelationship: (userRelationship) => dispatch( createUserRelationship(userRelationship) ),
  updateUserRelationship: (userRelationship) => dispatch( updateUserRelationship(userRelationship) ),
  deleteUserRelationship: (userRelationshipId) => dispatch( deleteUserRelationship(userRelationshipId) ),
});

export default withRouter(connect( mapStateToProps, mapDispatchToProps )(FriendsMenu));

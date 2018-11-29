import React from 'react';
import { connect } from 'react-redux';
import Birthday from './birthday';
import { filterFriends, filterRelationships } from '../../reducers/selectors';
import { fetchUsers } from '../../actions/user_actions';
import moment from 'moment';

class BirthdayContainer extends React.Component {

  componentDidMount() {
    this.props.fetchUsers(this.props.friends.map(rel => rel.id));
  }
  componentWillReceiveProps(nextProps) {
    let missingUsers = [];
    nextProps.friendIds.forEach( id => {
      if ( nextProps.users[id] === undefined ) {
        missingUsers.push(id);
      }
    })
    if ( missingUsers.length > 0 ) {
      this.props.fetchUsers(missingUsers);
    }
  }

  render() {
    return <Birthday friends={ this.props.friends }/>
  }
}

const mapStateToProps = ({ session, entities: { users, userRelationships } }) => {
  const friendIds = filterRelationships( session.id, userRelationships, "accepted");
  return {
    friendIds,
    friends: filterFriends(users, friendIds, (a, b) => {
      const [dateA, dateB] = [moment(a.birth_date), moment(b.birth_date)];
      return (dateA.month()*100 + dateA.day()) - (dateB.month()*100 + dateB.day())
    }),
    currentUserId: session.id,
    users
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: (userIds) => dispatch(fetchUsers(userIds)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BirthdayContainer);

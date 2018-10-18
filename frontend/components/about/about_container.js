import React from 'react'; 
import { connect } from 'react-redux';

import { withRouter, Link } from 'react-router-dom';
import About from './about';

class AboutContainer extends React.Component { 

  componentDidMount() {
    if ( this.props.user === undefined ) {
      fetchUsers([this.props.profileId]); 
    }
  }

  componentWiilReceiveProps(nextProps) {
    if ( nextProps.props.user === undefined ) {
      fetchUsers([nextProps.profileId]);  
    }
  }

  render() {
    return (
      <div className="about-container">
        <div className="about-header">
          <div>
            <div className="icon">
              <i className="fas fa-globe-americas"></i>
            </div>
            <h1>Intro</h1>
          </div>
          <Link to="#">Edit</Link>
        </div>
        <About user={ this.props.user } />
      </div>
    );
  }
}


const mapStateToProps = ({ entities: { users }, session }, ownProps) => {
  const profileId = Number(ownProps.match.params.userId) || 0;
  return {
    user: users[profileId], 
    currentUser: users[session.id],
    profileId, 
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: (friendIds) => dispatch( fetchUsers(friendIds) ),
});

export default withRouter(connect( mapStateToProps, mapDispatchToProps )( AboutContainer ));

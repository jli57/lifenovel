import React from 'react'; 
import { connect } from 'react-redux';
import { getPendingFriendRequests } from '../../reducers/selectors'; 
import Alert from './alert';
import { openModal } from '../../actions/modal_actions'; 

class NotificationsAlertContainer extends React.Component {
  
  constructor(props) {
    super(props); 
    this.state = {
      newNotifications: this.props.num ? true : false 
    }
  }

  handleClick(e) {
    this.props.openModal("notifications", {}); 
    this.setState({newNotifications: false}); 
  }

  render() {
    
    const {num} = this.props; 

    return (
      <div className="nav-icon-container" onClick={ this.handleClick } >
        <i tabIndex="1" className={`fas fa-bell nav-icon${this.state.newNotifications ? ' white' : ''}`}></i>
        <Alert num={num} newNotifications={ this.state.newNotifications }/>
      </div>
    ); 
  }
} 

const mapStateToProps = ({ entities: { userRelationships }, session }) => {
  const notifications = []; 
  return {
    num: notifications.length, 
  }
};

const mapDispatchToProps = dispatch => ({
  openModal: (modal, modalArgs) => dispatch( openModal(modal, modalArgs)),
}); 

export default connect( mapStateToProps, mapDispatchToProps)( NotificationsAlertContainer );

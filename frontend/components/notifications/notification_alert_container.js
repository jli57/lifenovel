import React from 'react'; 
import { connect } from 'react-redux';
import { getPendingFriendRequests } from '../../reducers/selectors'; 
import Alert from './alert';
import { openModal } from '../../actions/modal_actions'; 

const NotificationsAlertContainer = ({num, openModal}) => (
  <div>
    <Alert num={num}/>
    <i tabIndex="1" className="fas fa-bell nav-icon"
      onClick={ () => { openModal("notifications", {}) } } >
    </i>
  </div>
); 

const mapStateToProps = ({ entities: { userRelationships }, session }) => {
  const notifications = getPendingFriendRequests( session.id, userRelationships ); 
  return {
    num: notifications.length, 
  }
};

const mapDispatchToProps = dispatch => ({
  openModal: (modal, modalArgs) => dispatch( openModal(modal, modalArgs)),
}); 

export default connect( mapStateToProps, mapDispatchToProps)( NotificationsAlertContainer );

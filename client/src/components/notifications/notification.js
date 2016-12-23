import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {removeNotificationAction} from '../../store/actions';

const mapDispatchToProps = dispatch => ({
});

const Notification = ({notification}) => (
  <div className={`alert alert-dismissible alert-${notification.alertType}`} role="alert">
    {notification.text}
  </div>
);

Notification.propTypes = {
  notification: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(Notification);

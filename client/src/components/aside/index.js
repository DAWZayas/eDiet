import React from 'react';
import {Notifications} from '../notifications';

const style = {
  notifications: {
    bottom: '0',
    margin: '0 5% 0 5%',
    position: 'fixed',
    textAlign: 'center',
    width: '90%',
    zIndex: '9999',
  },
  aside: {
    bottom: '0',
    width: '100%',
  }
};

export default () => (
  <aside style={style.aside}>
    <div className="row">
      <div className="col-xs-11 col-sm-9 col-md-7" style={style.notifications}>
        <Notifications />
      </div>
    </div>
  </aside>
);

// npm packages
import React from 'react';

import {Notifications} from '../notifications';

const style = {
  aside: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
};

export default () => (
  <aside style={style.aside}>
    <div className="row">
      <div className="col-xs-11 col-sm-9 col-md-7">
        <Notifications />
      </div>
    </div>
  </aside>
);

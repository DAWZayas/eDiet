import React from 'react';
import {Link} from 'react-router';

import ButtonsPanel from './buttonsPanel';
const styles = require('./style.scss');

export default class PanelUser extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    const {user} = this.props;
    return (
      <div className={`panel panel-default ${styles.panel}`}>
        <div className="panel-heading"> PROFILE </div>
        <div className="panel-body">
              <div className={`${styles.data}`}>
                <p>Email:</p>
                {user ? user.email ? <p>{user.email}</p> : <p>Without email associated</p> : null}
              </div>
              <div className={`${styles.data}`}>
                <p>Register date:</p>
                {user ? user.registrationDate ? <p>{user.registrationDate}</p> : <p>Without register date associated</p> : null}
              </div>
              {user ?  !user.role ?
                <div className={`${styles.data}`}>
                  <p>Height:</p>
                  {user.height ? <p>{user.height}</p> : <p>Without height associated</p>}
                </div>
              : null : null}
        </div>
        <ButtonsPanel user={user}/>
      </div>
    );
  }
}

import React from 'react';
import {Link} from 'react-router';

import ButtonsPanel from './buttonsPanel';
const styles = require('./style.scss');

const style = {
  header: {
    borderBottom: 'none',
    backgroundColor: 'rgba(232, 142, 58, 0.33)',
    fontFamily: '\'Sansita\', sans-serif',
    fontSize: '2em',
  }
};

export default class PanelUser extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
  const {user} = this.props;
  return (
    <div className={`panel panel-default ${styles.panel}`}>
      <div className="panel-heading" style={style.header}>
        PROFILE
      </div>
        <div className="panel-body">
          <div className={`${styles.data}`}>
            <p className={`${styles.tittle}`}>
              Email:
            </p>
            {user ?
              user.email ?
                <p className={`${styles.result}`}>
                  {user.email}
                </p>
              :
                <p className={`${styles.result}`}>
                  Without email associated
                </p>
            : null}
          </div>
          <div className={`${styles.data}`}>
            <p className={`${styles.tittle}`}>
              Register date:
            </p>
            {user ?
              user.registrationDate ?
                <p className={`${styles.result}`}>
                  {user.registrationDate.substr(0, 10)}
                </p>
              :
                <p className={`${styles.result}`}>
                  Without register date associated
                </p>
            : null}
          </div>
          {user ?
            !user.role ?
              <div className={`${styles.data}`}>
                <p className={`${styles.tittle}`}>
                  Height:
                </p>
                {user.height ?
                  <p className={`${styles.result}`}>
                    {user.height} metres
                  </p>
                  :
                  <p className={`${styles.result}`}>
                    Without height associated
                  </p>
                }
              </div>
            : null
          : null}
          {user ?
            !user.role ?
              <div className={`${styles.data}`}>
                <p className={`${styles.tittle}`}>
                  Weight:
                </p>
                {user.weight ?
                  <p className={`${styles.result}`}>
                    {user.weight} kilograms
                  </p>
                  :
                  <p className={`${styles.result}`}>
                    Without weight associated
                  </p>
                }
              </div>
            : null
          : null}
        </div>
        <ButtonsPanel user={user}/>
      </div>
    );
  }
}

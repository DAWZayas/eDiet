import React from 'react';
import {Link} from 'react-router';

import ButtonsPanel from './buttonsPanel';
const styles = require('./style.scss');

const style = {
  header: {
    borderBottom: 'none',
    backgroundColor: 'rgb(255, 255, 255)',
    fontFamily: '\'Lobster\', sans-serif',
    fontSize: '3em',
    textAlign: 'center'
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
        My data
      </div>
      <hr style={{width:'65%',border: '1px solid'}} />
        <div className={`panel-body`}>
          <div className={`${styles.data}`}>
            <p className={`${styles.tittle}`}>
              Email:
            </p>
            {user ?
              user.email ?
                <span className={`${styles.result}`}>
                  {user.email}
                </span>
              :
                <span className={`${styles.result}`}>
                  Without email associated
                </span>
            : null}
          </div>
          <div className={`${styles.data}`}>
            <p className={`${styles.tittle}`}>
              Register date:
            </p>
            {user ?
              user.registrationDate ?
                <span className={`${styles.result}`}>
                  {user.registrationDate.substr(0, 10)}
                </span>
              :
                <span className={`${styles.result}`}>
                  Without register date associated
                </span>
            : null}
          </div>
          {user ?
            !user.role ?
              <div className={`${styles.data}`}>
                <p className={`${styles.tittle}`}>
                  Height:
                </p>
                {user.height ?
                  <span className={`${styles.result}`}>
                    {user.height} metres
                  </span>
                  :
                  <span className={`${styles.result}`}>
                    Without height associated
                  </span>
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
                  {user.weight} kilograms
              </div>
            : null
          : null}
        </div>
        <ButtonsPanel user={user}/>
      </div>
    );
  }
}

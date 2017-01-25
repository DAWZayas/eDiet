import React from 'react';
import {Link} from 'react-router';

const styles = require('./style.scss');

export default class ButttonsUser extends React.Component {

  constructor(props){
    super(props);
  }
  render(){
    const {user} = this.props;
    return (
      <div className={`${styles.userButtons}`}>
        <Link to='/user/updateProfile'>
          <button className="btn btn-default">
            Update profile
          </button>
        </Link>
        {user ?
          !user.role ?
            <Link to='/user/graphics'>
              <button className="btn btn-default">
                Progress
              </button>
            </Link>
          : null
        :null}
        {user ?
          user.role ?
            <Link to='/user/addAdmin'>
              <button className="btn btn-default">
                  <i className={`fa fa-plus`} aria-hidden="true"></i>  Admin. user
              </button>
            </Link>
          : null
        : null}
      </div>
    );
  }
}

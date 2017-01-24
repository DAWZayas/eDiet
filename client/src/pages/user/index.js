// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import _ from 'lodash';

import {getUserAction} from '../../store/actions';
const styles = require('./style.scss');

const mapStateToProps = (state) => ({
   userAuth: state.auth.user,
   user: state.user.user,
 });

 const mapDispatchToProps = (dispatch) => ({
   getUser:  _.once((payload) => dispatch(getUserAction(payload))),
 });

const user = ({user, userAuth, getUser}) => {
  getUser({id: userAuth.id});
  {console.log(user)}

  return (
    <div className={`container ${styles.container}`}>
      <center>
        <div className={`${styles.avatar}`}>
          <img src='../../../images/logo/logo.png'/>
            {
              user ?
                user.login ?
                <p>
                  {user.login}
                </p>
                : null
              : null
            }
        </div>
      </center>
      <div className={`${styles.userButtons}`}>
        <button className="btn btn-default">
          <Link to='/user/updateProfile'>
            Update profile
          </Link>
        </button>
        <button className="btn btn-default">
          <Link to='/user/graphics'>
            Progress
          </Link>
        </button>
        {
          user ?
            user.role ?
              <button className="btn btn-default">
                <Link to='/user/addAdmin'>
                  <i className={`fa fa-plus`} aria-hidden="true"></i>
                  Admin. user
                </Link>
              </button>
            : null
          : null
        }
      </div>
      <div className={`panel panel-default ${styles.panel}`}>
        <div className="panel-heading">
          PROFILE
        </div>
        <div className="panel-body">
          {user ?
              <div>
                <div className={`${styles.data}`}>
                  <p>Email:</p>
                  {user.email ?
                    <p>{user.email}</p>
                  :
                    <p>Without email associated</p>
                  }
                </div>
                <div className={`${styles.data}`}>
                  <p>Register date:</p>
                  {user.registrationDate ?
                    <p>{user.registrationDate}</p>
                  :
                    <p>Without register date associated</p>
                  }
                </div>
                {!user.role ?
                  <div className={`${styles.data}`}>
                    <p>Height:</p>
                    {user.height ?
                      <p>{user.height}</p>
                    :
                      <p>Without height associated</p>
                    }
                  </div>
                : null}
              </div>
            : null}
          </div>
          {user ?
            !user.role ?
              <div className={`${styles.dietButtons}`}>
                <button className="btn btn-default">
                  <Link to='#'>
                    See my menus
                  </Link>
                </button>
                <button className="btn btn-default">
                  <Link to='#'>
                    See my exercises
                  </Link>
                </button>
              </div>
            : null
          : null}
        </div>
      </div>
  )
 };



export default connect(mapStateToProps, mapDispatchToProps)(user);

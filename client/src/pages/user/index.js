// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import _ from 'lodash';
import {push} from 'react-router-redux';

import {getUserAction} from '../../store/actions';
const styles = require('./style.scss');

const mapStateToProps = (state) => ({
   userAuth: state.auth.user,
   user: state.user.user,
 });

 const style = {
   header: {
      borderBottom: 'none',
      backgroundColor: 'rgba(232, 142, 58, 0.33)',
   }
 };

 const mapDispatchToProps = (dispatch) => ({
   getUser:  payload => dispatch(getUserAction(payload)),
   navToUser: () => dispatch(push('/user/updateProfile')),
 });

class user extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    const {userAuth, user, getUser} = this.props;
    this.props.getUser({id: userAuth.id});
  }

  render(){
    const {user} = this.props;

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
          <Link to='/user/updateProfile' style={{margin: '0 2% 0 2%'}}>
            <button className="btn">
              Update profile
            </button>
          </Link>
          {
            user ?
              !user.role ?
                <Link to='/user/graphics' style={{margin: '0 2% 0 2%'}}>
                  <button className="btn">
                      Progress
                  </button>
                  </Link>
              : null
            : null
          }
          {
            user ?
              user.role ?
                <Link to='/user/addAdmin' style={{margin: '0 2% 0 2%'}}>
                  <button className="btn">
                    <i className={`fa fa-plus`} aria-hidden="true"></i>
                    Admin. user
                  </button>
                </Link>
              : null
            : null
          }
        </div>
        <div className={`panel panel-default ${styles.panel}`}>
          <div className="panel-heading" style={style.header}>
            PROFILE
          </div>
          <div className="panel-body">
            {user ?
                <div>
                  <div className={`${styles.data}`}>
                    <p className={`${styles.tittle}`}>Email:</p>
                    {user.email ?
                      <p className={`${styles.result}`}>{user.email}</p>
                    :
                      <p className={`${styles.result}`}>Without email associated</p>
                    }
                  </div>
                  <div className={`${styles.data}`}>
                    <p className={`${styles.tittle}`}>Register date:</p>
                    {user.registrationDate ?
                      <p className={`${styles.result}`}>{user.registrationDate}</p>
                    :
                      <p className={`${styles.result}`}>Without register date associated</p>
                    }
                  </div>
                  {!user.role ?
                    <div className={`${styles.data}`}>
                      <p className={`${styles.tittle}`}>Height:</p>
                      {user.height ?
                        <p className={`${styles.result}`}>{user.height}</p>
                      :
                        <p className={`${styles.result}`}>Without height associated</p>
                      }
                    </div>
                  : null}
                </div>
              : null}
            </div>
            {user ?
              !user.role ?
                <div className={`${styles.dietButtons}`}>
                  <button className="btn">
                    <Link to='#'>
                      See my menus
                    </Link>
                  </button>
                  <button className="btn">
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
    }
 };

export default connect(mapStateToProps, mapDispatchToProps)(user);

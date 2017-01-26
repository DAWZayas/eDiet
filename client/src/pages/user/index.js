// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import _ from 'lodash';
import {push} from 'react-router-redux';

import {getUserAction} from '../../store/actions';
const styles = require('./style.scss');
import UserProfile from '../../components/user';

const mapStateToProps = (state) => ({
   userAuth: state.auth.user,
   user: state.user.user,
 });

 const mapDispatchToProps = (dispatch) => ({
   getUser:  payload => dispatch(getUserAction(payload)),
   navToUser: () => dispatch(push('/user/updateProfile')),
 });

class user extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    const {userAuth, getUser} = this.props;
    this.props.getUser({id: userAuth.id});
  }

  render(){
    const {user} = this.props;
    return (
      <div className={`container ${styles.container}`}>
        <center>
          <div className={`${styles.avatar}`}>
            <img src='../../../images/logo/logo.png'/>
            {user ?
                user.login ?
                  <p>
                    {user.login}
                  </p>
              : null
            :null}
          </div>
        </center>
        <UserProfile user={user}/>
      </div>
      )
  }
 };

export default connect(mapStateToProps, mapDispatchToProps)(user);

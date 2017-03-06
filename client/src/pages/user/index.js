// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {server as serverConfig} from '../../../config';

import {getUserAction, getImagesAction} from '../../store/actions';

const styles = require('./style.scss');
import UserProfile from '../../components/user';

const mapStateToProps = (state) => ({
   userAuth: state.auth.user,
   user: state.user.user,
   images: state.uploads.images,
 });

 const mapDispatchToProps = (dispatch) => ({
   getUser:  payload => dispatch(getUserAction(payload)),
   navToUser: () => dispatch(push('/user/updateProfile')),
   getImages: payload => dispatch(getImagesAction(payload))
 });

class user extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    const {userAuth, getUser} = this.props;
    this.props.getUser({id: userAuth.id});
    this.props.getImages({folder: 'company'});
  }

  render(){
    const {user, image} = this.props;

    return (
      <div className={`container ${styles.container}`}>
        <center>
          <div className={`${styles.avatar}`}>
            <img src={`${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}/images/company/logo.png`} />
            {user ?
                user.login ?
                  <h1>
                    {user.login}
                  </h1>
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

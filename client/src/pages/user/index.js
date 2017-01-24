// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import _ from 'lodash';

import {getUserAction} from '../../store/actions';

const mapStateToProps = (state) => ({
   userAuth: state.auth.user,
   user: state.user.user,
 });

 const mapDispatchToProps = (dispatch) => ({
   getUser:  _.once((payload) => dispatch(getUserAction(payload))),
 });

const user = ({user, userAuth, getUser}) => {
    getUser({id: userAuth.id});
    const style = {
      marginTop: '2%',
    };
  return (

      <div className="container" style={style}>
        <div className="container">
          <div className="panel panel-default">
            <div className="panel-heading">
              <p>Information user </p>
            </div>
            <div className="panel-body">
              {user ?
                <span>
              {console.log(user)}
              {user.login ?   <ul className="list-group"><li className="list-group-item"><p> username:  {user.login} </p></li></ul> : null}
              {user.email ?   <ul className="list-group"><li className="list-group-item"><p>email: {user.email}</p></li></ul>  : null}
              {user.height ?  <ul className="list-group"><li className="list-group-item"> <p> height:  {user.height}</p> </li></ul> : null}
                </span>
              : null}
            </div>
          </div>
            {user ?
              <center>
                {user.role  ? <button className="btn btn-default" ><Link to='/user/addAdmin'> create user Admin </Link></button>: null}
                {user.weight.length || user.imc.length !==0  ? <button className="btn btn-default" >  <Link to='/user/graphics'>go to stadistics of your weight </Link></button> : null}
                {user.exercises.length && user.menus.length===0 ?  <p> select diet and exercise </p> : <button className="btn btn-default"> show diet and exercises </button>}
                <button className="btn btn-default"> <Link to='/user/updateProfile'>update your profile </Link></button>
              </center>
            :null}
        </div>
      </div>
  )
 };

export default connect(mapStateToProps, mapDispatchToProps)(user);

// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import _ from 'lodash';

import InputUser from '../../components/user';
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
  return (
{/*
    <div className="container">
      {user ?
      <div>
        <img alt="User image"></img>
        <p>{user.login}</p>
      </div>
      <div>
        <button>
          Change info
        </button>
        <button>
          Change password
        </button>
        <button>
          Delete count
        </button>
      </div>
      <div>
        <p>
          My info
        </p>
        <ul>
        {user.email ?
          <li>
            Email: {user.email}
          </li>
        :
          null
        }
        {user.height
          <li>
            Height: {user.height}
          </li>
        :
          null
        }
        {user.weight
          <li>
            Weight: {user.weight}
          </li>
        :
          null
        }
        </ul>
      </div>
      <div>
        <p>
          My evolution
        </p>
        * Graphic 1
        * Graphic 2
      </div>
      <div>
        <button>
          See exercises I've done
        </button>
        <button>
          See menus I've done
        </button>
      </div>
      :
        null
      }
    </div>
*/}

      <div className="container" >
        <div className="container">
          <div className="panel panel-default">
            <div className="panel-heading">
              <p>Information user </p>
            </div>
            <div className="panel-body">
              {user ?
                <span>
              {user.login ?   <ul className="list-group"><li className="list-group-item"><p> username:  {user.login} </p></li></ul> : null}
              {user.email ?   <ul className="list-group"><li className="list-group-item"><p>email: {user.email}</p></li></ul>  : null}
              {user.height ? <ul className="list-group"><li className="list-group-item"> <p> height:  {user.height}</p> </li></ul> : null}
              {user.exercises.length ===0 ?  <ul className="list-group"><li className="list-group-item"> <p> select diet and exercise </p></li></ul> : null}
              {user.menus.length ===0 ? <ul className="list-group"><li className="list-group-item"><p> select Diet and exercise </p></li></ul> : null}
              {user.weight.length  ? <ul className="list-group"><li className="list-group-item"><button className="btn btn-default" >  <Link to='/user/graphics'>go to stadistics of your weight </Link></button></li></ul>: null}
              {user.role  ? <ul className="list-group"><li className="list-group-item"><button className="btn btn-default" ><Link to='/user/addAdmin'> create user Admin </Link></button></li></ul>: null}
                </span>
                : null}
          </div>
        </div>
      </div>
        <br/>
        <InputUser user={user}/>
      </div>
  )
 };

export default connect(mapStateToProps, mapDispatchToProps)(user);
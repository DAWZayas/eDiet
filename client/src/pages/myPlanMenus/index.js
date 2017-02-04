import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import moment from 'moment';

import {getUserAction} from '../../store/actions';
import DayPlanMenu from '../../components/dayPlanMenu';

const mapStateToProps = (state) => ({
   user: state.user.user,
   route: state.routing.locationBeforeTransitions.pathname,
   userAuth: state.auth.user,
 });

const mapDispatchToProps = (dispatch) => ({
  doGetUser: payload => dispatch(getUserAction(payload)),
});

class userArrays extends Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    const id = this.props.userAuth.id;
    this.props.doGetUser({id});
  }

  render(){
    const {user} = this.props;
    const day = moment().format('D');
    const date = new Date();
    const month = date.getMonth() + 1;

    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel panel-heading">
            Menu
          </div>
          {  console.log(user instanceof Array)}
          { !user instanceof Array ?

            :
            <DayPlanMenu
              menus={user.menusExercises.menus}
              day={day}
              month={month}
            />

          }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(userArrays);

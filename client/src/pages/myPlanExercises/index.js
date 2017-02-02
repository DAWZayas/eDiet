import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import moment from 'moment';

import {getUserAction} from '../../store/actions';
import DayPlanExercises from '../../components/dayPlanExercises';

const mapStateToProps = (state) => ({
   user: state.user.user,
   route: state.routing.locationBeforeTransitions.pathname
 });

const mapDispatchToProps = (dispatch) => ({
  doGetUser: payload => dispatch(getUserAction(payload)),
});

class userArrays extends Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    const route = this.props.route.split('/');
    const id = route[route.length-1];
    this.props.doGetUser({id});
  }

  render(){
    const {user} = this.props;
    const day = moment().format('D');

    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel panel-heading">
            Menu
          </div>
          {
            <DayPlanExercise
              table={user.menusExercises.exercises}
              day={day}
            />
          }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(userArrays);

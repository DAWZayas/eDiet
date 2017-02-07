import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import moment from 'moment';

import {getUserAction} from '../../store/actions';
import DayPlanExercises from '../../components/dayPlanExercises';

const mapStateToProps = (state) => ({
   user: state.user.user,
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
    const month = moment().format('M');
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel panel-heading">
            Today exercises
          </div>
          {user ?
            user.menusExercises ?
              user.menusExercises.exercises ?
                <DayPlanExercises
                  tables={user.menusExercises.exercises}
                  day={day}
                  month={month}
                />
              : <p>Without exercises</p>
            : null
          : null}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(userArrays);

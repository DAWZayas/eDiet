import React, {Component} from 'react';
import {Link} from 'react-router';
import {push} from 'react-router-redux';
import {connect} from 'react-redux';
import moment from 'moment';

import {getTimeFoodsAction} from '../../store/actions';

const mapDispatchToProps = (dispatch) => ({
  doGetTimeFoods: payload => dispatch(getTimeFoodsAction(payload))
});

const mapStateToProps = state => ({
  timeFoods: state.timeFoods.timeFoods,
});

class DayPlanMenu extends Component{
  constructor(props){
    super(props);
    this.expandCalendar = this.expandCalendar.bind(this);
  }

  expandCalendar(menus, day, month) {
    let monthMenus = [];

    for (let i=1, j=0; moment().daysInMonth(month)>=i; i++, j++){
      if(j === menus.length) j=0;
      monthMenus.push(menus[j]);
    }

    return monthMenus[day - 1].name;
  }

  componentWillMount() {
    const {menus, day, month, doGetTimeFoods} = this.props;
    const name = this.expandCalendar(menus, day, month);
    doGetTimeFoods({name});
  }

  render(){
    const {timeFoods} = this.props;
    console.log(timeFoods);
    return (
      <div className="panel panel-body">
      {timeFoods.length !== 0 ?
          timeFoods.map((obj, index) =>
            <ul key={index}>
              <li>
                {obj.timeFood}
              </li>
              <li>
                {obj.foods.map((object, index2) =>
                  <ul key={index2}>
                    {object.nameFood}
                  </ul>
                )}
              </li>
            </ul>
          )
      :
        <p>Without foods</p>
      }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DayPlanMenu);
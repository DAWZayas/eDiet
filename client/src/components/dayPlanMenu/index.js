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
    this.state = {name};
  }

  render(){
    const {timeFoods} = this.props;
    return (
      <span>
        <center style={{marginBottom: '5%'}}>
          <h2>  Menu name : {this.state.name} </h2>
        </center >
      {timeFoods.length !== 0 ?
          timeFoods.map((obj, index) =>
          <span key={index}>
          <div className="panel panel-default">
            <div className="panel-heading" style={{background: 'rgba(232, 142, 58, 0.329412'}}>
               <p className="glyphicon glyphicon-cutlery"> &nbsp; {obj.timeFood} </p>
            </div>
            <div className="panel-body">
              <ul className="list-group">
                {obj.foods.map((object,index)=> <li key={index} className="list-group-item">food: {object.nameFood}</li>)}
              </ul>
            </div>
          </div>
          </span>
          )
      :
        <p>Without foods</p>
      }
      </span>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DayPlanMenu);

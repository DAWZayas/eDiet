import React, {Component} from 'react';
import {Link} from 'react-router';
import {push} from 'react-router-redux';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
});

class DayPlanMenu extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {menu} = this.props;

    return (
      <div className="panel panel-body">

      {menu.length !== 0 ?
          menu.timeFoods.map((obj, index) =>
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
        <p>Sin menus</p>
      }
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(DayPlanMenu);

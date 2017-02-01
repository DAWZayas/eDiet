import React, {Component} from 'react';
import {Link} from 'react-router';
import {push} from 'react-router-redux';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
});

class DayPlanExercises extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {exercises} = this.props;

    return (
      <div className="panel panel-body">

      {exercises.length !== 0 ?
          exercises.timeFoods.map((obj, index) =>
            <ul key={index}>
              <li>
                {obj.name}
              </li>
              <li>
                <ul>
                  <li>
                    {obj.series}
                  </li>
                  <li>
                    {obj.repeats}
                  </li>
                </ul>
              </li>
            </ul>
          )
      :
        <p>Without exercises</p>
      }
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(DayPlanExercises);

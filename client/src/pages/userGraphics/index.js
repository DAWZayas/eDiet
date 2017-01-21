import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import { LineChart } from 'react-d3';


const mapStateToProps = (state) => ({
   userAuth: state.auth.user,
 });

const Graph = ({userAuth}) => {
  let lineData = [
      {
        name: userAuth.login,
        values: userAuth.weight.map( (obj, index) => Object.assign({}, {x: index}, {y:obj}) ),
        strokeWidth: 3,
        strokeDashArray: "5,5",
      },

  ];
    return (
      <div >
            <LineChart
              legend={true}
              data={lineData}
              width={'100%'}
              height={400}
              viewBoxObject={{
                x: 0,
                y: 0,
                width: 900,
                height: 400
              }}
              title="stadistics weight"
              yAxisLabel="wheight"
              xAxisLabel="weeks"
              domain={{x: [,5], y: [-1,]}}
              gridHorizontal={true}
            />
      </div>
    );
  }


export default connect(mapStateToProps, null)(Graph);

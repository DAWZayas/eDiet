import React , {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
   userAuth: state.auth.user,
 });


const Graph = ({userAuth}) =>{
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'October', 'November', 'December'],
      datasets: [{
          label: 'Weight',
          type:'line',
          data: userAuth.weight,
          fill: false,
          borderColor: '#EC932F',
          backgroundColor: '#EC932F',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F',
          yAxisID: 'y-axis-2'
        },{
          type: 'bar',
          label: 'IMC',
          data: [5, 10 , 15 , 20 , 50 , 65 ,78],
          fill: false,
          backgroundColor: '#71B37C',
          borderColor: '#71B37C',
          hoverBackgroundColor: '#71B37C',
          hoverBorderColor: '#71B37C',
          yAxisID: 'y-axis-1'
        }]
    };

    const options = {
      responsive: true,
      tooltips: {
        mode: 'label'
      },
      elements: {
        line: {
          fill: false
        }
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              display: false
            },
            labels: {
              show: true
            }
          }
        ],
        yAxes: [
          {
            type: 'linear',
            display: true,
            position: 'left',
            id: 'y-axis-1',
            gridLines: {
              display: false
            },
            labels: {
              show: true
            }
          },
          {
            type: 'linear',
            display: true,
            position: 'right',
            id: 'y-axis-2',
            gridLines: {
              display: false
            },
            labels: {
              show: true
            }
          }
        ]
      }
    };

    return (
      <div className="container">
        <div className="container">
          <h3>IMC and weight</h3>
          <Bar
            data={data}
            width={100}
            height={30}
            options={options}
          />
        </div>
      </div>
    );
  }

export default connect (mapStateToProps, null)(Graph);

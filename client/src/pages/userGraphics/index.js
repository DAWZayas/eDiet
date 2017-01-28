import React , {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {getUserAction} from '../../store/actions';
import Imc from '../../components/imc';

const mapStateToProps = (state) => ({
   userAuth: state.auth.user,
   user: state.user.user,
 });

 const mapDispatchToProps = (dispatch) => ({
   getUser:  payload => dispatch(getUserAction(payload)),
 });


class Graph extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    const {userAuth, getUser} = this.props;
    console.log(userAuth)
    this.props.getUser({id: userAuth.id});
  }

  render(){
    const {user} =this.props;
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'October', 'November', 'December'],
      datasets: [{
          label: 'Weight',
          type:'line',
          data: user ? user.weight : [],
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
          data: user ? user.imc : [],
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
        <div className="container" style={{marginBottom: '5%'}}>
          <h3>IMC and weight</h3>
          <Bar
            data={data}
            width={100}
            height={30}
            options={options}
          />
        </div>
        {this.props. user ?
            this.props.user.height ?
              <Imc  userId={this.props.user.id} userHeight={this.props.user.height}/>
             : <h4> you must define your height </h4>
        :null}

      </div>
    );
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Graph);

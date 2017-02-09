import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import _ from 'lodash';

import {getTimeFoodsAction, createTimeFoodAction} from '../../store/actions';
import TimeFood from '../../components/draw';

const mapStateToProps = (state) => ({
   timeFoods: state.timeFoods.timeFoods,
   route: state.routing.locationBeforeTransitions.pathname
 });

const mapDispatchToProps = (dispatch) => ({
  doGetTimeFoods: payload => dispatch(getTimeFoodsAction(payload)),
  navTo: timeFood => dispatch(push(timeFood)),
  createTimeFood: payload=> dispatch(createTimeFoodAction(payload))
});

class TimeFoods extends React.Component  {

  constructor(props){
    super(props);
    const rout = this.props.route.split('/');
    const name = rout[rout.length-1];
    this.state={name};
  }

  componentWillMount(){
    this.props.doGetTimeFoods({name: this.state.name});
  }

  render(){
  const handleCreateTimeFood = (e) => {
    e.preventDefault();
    const timeFood = timeFoodss.value;
    this.props.createTimeFood({name: this.state.name, timeFood});
  };

  const style = {
    marginTop: '2%',
  };

  let timeFoodss;

  return (
    <div className="container" style={style}>
      <div className="panel panel-default">
        <div className="panel-heading">
          Create Time Food
        </div>
        <div className="panel-footer ">
        <div >
          <input
            type="text"
            className="form-control"
            id="newName"
            placeholder="Time food name..."
            ref={(i) => { timeFoodss = i; }}
          />
          <br/>
          <center>
            <button className="btn btn-default"  onClick={handleCreateTimeFood}> Create timeFood</button>
          </center>
          </div>
          </div>
        </div>
     {this.props.timeFoods.map( (obj, index)=> < TimeFood key={index} route={this.props.route} menuName={this.state.name} menu={obj.timeFood} navTo={this.props.navTo}/>)}
    </div>);
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeFoods);

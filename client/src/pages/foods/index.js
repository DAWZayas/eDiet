import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import {getFoodsAction, createFoodAction} from '../../store/actions';
import Food from '../../components/draw';
const styles = require('./style.scss');


const mapStateToProps = (state) => ({
   foods: state.foods.foods,
   route: state.routing.locationBeforeTransitions.pathname
 });

const mapDispatchToProps = (dispatch) => ({
  doGetFoods: payload => dispatch(getFoodsAction(payload)),
  createFood: payload => dispatch(createFoodAction(payload)),
});

class TimeFoods extends React.Component{

  constructor(props){
    super(props);
    const rout = this.props.route.split('/');
    const nameTimeFood = rout[rout.length-1];
    const nameMenu = rout[rout.length-2];
    this.state ={nameTimeFood, nameMenu};
  }

  componentWillMount(){
    this.props.doGetFoods({nameMenu: this.state.nameMenu, nameTimeFood: this.state.nameTimeFood });
  }
  render(){

  const handleCreateFood = (e) => {
    e.preventDefault();
    const nameFood = foodss.value;
    const calories = calorie.value;
    this.props.createFood({nameMenu: this.state.nameMenu, nameTimeFood: this.state.nameTimeFood, nameFood, calories });
  };

  const style = {
    marginTop: '2%',
  };

  let foodss, calorie;

  return (
    <div className="container" style={style}>
    <h1 className={`${styles.title}`}>Foods management </h1>

      <div className="panel panel-default" >
        <div className="panel-footer " style={{backgroundColor: 'rgb(255, 255, 255)', border: 'none'}}>
        <input
          type="text"
          className="form-control"
          id="newName"
          placeholder="Food name..."
          ref={(i) => { foodss = i; }}
        />
        <br/>
        <div >
          <input
            type="number"
            className="form-control"
            id="newName"
            placeholder="ECalories..."
            ref={(i) => { calorie = i; }}
          />
          <br/>
          <center>
            <button className="btn btn-default" onClick={handleCreateFood} style={{backgroundColor: 'rgba(169, 198, 145, 0.9)'}}> Create Food</button>
          </center>
          </div>
          </div>
        </div>
     {this.props.foods.map( (obj, index)=> < Food key={index} menuName={this.state.nameMenu} timeFood={this.state.nameTimeFood} route={this.props.route} menu={obj.nameFood} calories={obj.calories} />)}
    </div>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeFoods);

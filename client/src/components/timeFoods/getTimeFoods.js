import React, {Component}from 'react'

export default class GetTimeFoods extends Component {

  constructor(props){
      super(props);
      this.state = {timeFoods : null};
  }

render(){
    let getTimeFood;
    let timeFoodFilter

    const handleGetTimeFoods = (e) => {
      e.preventDefault();
      const name = getTimeFood.value;
      const timeFoodFilter = this.props.menus.filter(obj => obj.name === name ? true : false);

      if(timeFoodFilter.length > 0){
        const timeFoods = timeFoodFilter.reduce((a,b) => a.concat(b)).timeFoods;
        this.setState({timeFoods});
      }
    };

    const handleGetAllMenus = (e) => {
      e.preventDefault();
      this.setState({timeFoods: null});
    };
  return(
<div className="panel panel-default">

  <div className="panel-heading">Get Time Foods</div>
  <div className="panel-body">
    {this.state.timeFoods ? this.state.timeFoods.map((obj,index) => <p key={index}> {obj.timeFood} </p> ) :
      this.props.menus.map((obj,index) => <p key={index}> {obj.name}  {obj.id} </p>)}
  </div>
  <div className="panel-footer">
    <form className="form-horizontal">
      <div className="col-sm-10">
        <input
          type="text"
          className="form-control"
          id="getTimeFood"
          placeholder="Enter your timeFood name..."
          ref={(i) => { getTimeFood = i; }}
        />
      </div>
      <br/><br/><br/>
      <button type="submit" className="btn btn-default" onClick={handleGetTimeFoods}>
        Get menu
      </button>
      <button type="submit" className="btn btn-default" onClick={handleGetAllMenus}>
        Get All menu
      </button>
    </form>
  </div>
</div>
    );
  }
}

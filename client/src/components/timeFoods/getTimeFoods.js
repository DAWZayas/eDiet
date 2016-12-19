import React, {Component}from 'react'

export default class GetTimeFoods extends Component {

  constructor(props){
      super(props);
      this.state = {timeFoods : false, name: false};
  }

render(){
    let menuName;

    const handleGetTimeFoods = (e) => {
      e.preventDefault();
      const name = menuName.value;
      this.setState({timeFoods: true});
      this.setState({name})
    };

    const handleGetAllMenus = (e) => {
      e.preventDefault();
      this.setState({timeFoods: false});
    };

  return(
<div className="panel panel-default">

  <div className="panel-heading">Get Time Foods</div>
  <div className="panel-body">
    { this.state.timeFoods ? this.props.menus.map((obj) => obj.name === this.state.name ?
      obj.timeFoods.map((object, index) => <p key={index}> {object.timeFood} </p>) : null ) :
      this.props.menus.map((obj,index) => <p key={index}> {obj.name}  {obj.id} </p>)}
  </div>
  <div className="panel-footer">
    <form className="form-horizontal">
      <div className="col-sm-10">
        <input
          type="text"
          className="form-control"
          id="menuName"
          placeholder="Enter your timeFood name..."
          ref={(i) => { menuName = i; }}
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

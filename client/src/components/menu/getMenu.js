import React, {Component}from 'react'

export default class GetMenu extends Component {

  constructor(props){
      super(props);
      this.state = {menu: null};
  }

  changeContent( e) {
    e.preventDefault();
    const name = getMenu.value;
    const menuFilter = this.props.menus.filter(obj => obj.name === name ? true : false);
    this.setState({menu: menuFilter});
    console.log(menuFilter);
  }

render(){
    let getMenu;
    let menuFilter

    const handleGetMenu = (e) => {
      e.preventDefault();
      const name = getMenu.value;
      const menuFilter = this.props.menus.filter(obj => obj.name === name ? true : false);
      this.setState({menu: menuFilter});
    };

    const handleGetAllMenu = (e) => {
      e.preventDefault();
      this.setState({menu: null});
    };
  return(
<div className="panel panel-default">

  <div className="panel-heading">Get Menu</div>
  <div className="panel-body">
    {this.state.menu ? this.state.menu.map( (obj,index) => <p key= {index}> {obj.name} {obj.id} {obj.timeFoods}</p>) :this.props.menus.map( (obj,index) => <p key= {index}> {obj.name} {obj.id} {obj.timeFoods}</p>)}
  </div>
  <div className="panel-footer">
    <form className="form-horizontal">
      <div className="col-sm-10">
        <input
          type="text"
          className="form-control"
          id="getMenu"
          placeholder="Enter your menu name..."
          ref={(i) => { getMenu = i; }}
        />
      </div>
      <br/><br/><br/>
      <button type="submit" className="btn btn-default" onClick={handleGetMenu}>
        Get menu
      </button>
      <button type="submit" className="btn btn-default" onClick={handleGetAllMenu}>
        Get All menu
      </button>
    </form>
  </div>
</div>
    );
  }
}

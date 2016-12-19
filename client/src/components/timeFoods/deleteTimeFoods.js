import React, {Component} from 'react'

export default class DeleteTimeFood extends Component {

  constructor(props){
      super(props);
      this.state = {timeFoods : null};
  }

  render () {
    const handleDeleteTimeFood = (e) => {
      e.preventDefault();
      const id = menuId.value;
      const timeFood = timeFoodName.value;
      const filter = this.props.menus.filter( obj => obj.id === id );
      const menu = filter.reduce((a,b) => a.concat(b));
      const foodTime = menu.timeFoods.filter( obj => obj.timeFood === timeFood)
      this.setState({timeFoods : foodTime});
      this.props.doDeleteTimeFood({id, timeFood});
      return false;
    };
    let timeFoodName;
    let menuId;
    return (
    <div className="panel panel-default">
      <div className="panel-heading">Delete TimeFood</div>
      <div className="panel-body">
      <div className="col-sm-10">
        {this.state.timeFoods ? this.state.timeFoods.map( (obj,index) => <strike key= {index}><p > {obj.timeFood} </p></strike>) : null}
        <input
          type="text"
          className="form-control"
          id="menuId"
          placeholder="Enter your menu id..."
          ref={(i) => { menuId = i; }}
        />
        <br/>
        <input
          type="text"
          className="form-control"
          id="timeFoodName"
          placeholder="Enter your timeFood name..."
          ref={(i) => { timeFoodName = i; }}
        />
      </div>
      </div>
      <div className="panel-footer">
        <form className="form-horizontal">
          <button type="submit" className="btn btn-default" onClick={handleDeleteTimeFood}>
            Delete time food
          </button>
        </form>
      </div>
    </div>
    );
  }
}

import React, {Component} from 'react';
import {drawPageTimeFood} from '../../util';
import {Spinner} from '../spinner';

export default class DeleteTimeFood extends Component {

  constructor(props){
      super(props);
      this.state = {timeFoods : null, desplegate:true};
  }

  render () {

    let timeFoodName;
    let menuId;

    const handleDeleteTimeFood = (e) => {
      e.preventDefault();
      const name = menuId.value;
      const timeFood = timeFoodName.value;
      const timeFoods = this.props.menus.filter( obj => obj.timeFood === timeFood && obj.name === name);
      this.setState({timeFoods});
      this.props.doDeleteTimeFood({name, timeFood});
      return false;
    };

    const handleDesplegate = (e) => {
      e.preventDefault();
      this.setState({desplegate: !this.state.desplegate});
    };

    return (
      <span>
      { this.state.desplegate ?
        <div className="panel panel-default">
          <div className="panel-heading">
            <a onClick={handleDesplegate} href="#" className=" glyphicon glyphicon-plus" role="button"/>
            Delete Time Food
          </div>
        </div> :
      <div className="panel panel-default">
        <div className="panel-heading">
          <a onClick={handleDesplegate} href="#" className=" glyphicon glyphicon-minus" role="button"/>
          Delete Time Food
        </div>
        <div className="panel-body">
        <div className="col-sm-10">
          { this.props.status === 'loading_delete' ? <Spinner /> : this.state.timeFoods ?<strike> {drawPageTimeFood(this.state.timeFoods)} </strike>:null}
        </div>
        </div>
        <div className="panel-footer">
          <form className="form-horizontal">
            <input
              type="text"
              className="form-control"
              id="menuId"
              placeholder="Enter your menu name..."
              ref={(i) => { menuId = i; }}
            />
            <br/>
            <div className="input-group">
              <input className="input-group-addon"
                type="text"
                className="form-control"
                id="timeFoodName"
                placeholder="Enter your timeFood name..."
                ref={(i) => { timeFoodName = i; }}
              />
              <span className="input-group-btn" >
                <button type="submit" className="btn btn-default" onClick={handleDeleteTimeFood}>Delete time food</button>
              </span>

            </div>
          </form>
        </div>
      </div>}
    </span>
    );
  }
}

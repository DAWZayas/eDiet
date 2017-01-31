import React from 'react';

export default class ShowMenuBody extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="panel panel-default">
        <div className="panel-heading">
           {this.props.timeFood}
        </div>
        <div className="panel-body">
          <ul className="list-group">
            {this.props.foods.map((obj,index)=> <li key={index} className="list-group-item">food: {obj.nameFood}</li>)}
          </ul>
        </div>
    </div>
    );
  }
}

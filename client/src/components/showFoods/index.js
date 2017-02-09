import React from 'react';

export default class ShowMenuBody extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <span>
      <div className="panel panel-default">
        <div className="panel-heading" style={{background: 'rgba(232, 142, 58, 0.329412'}}>
           <p className="glyphicon glyphicon-cutlery"> &nbsp; {this.props.timeFood}  </p>
        </div>
        <div className="panel-body">
          <ul className="list-group">
            {this.props.foods.map((obj,index)=> <li key={index} className="list-group-item">food: {obj.nameFood}</li>)}
          </ul>
        </div>
    </div>
    </span>
    );
  }
}

import React, {Component} from 'react';

export default class Get extends Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log('PROPS:', this.props);
    console.log('STATE:', this.state);

    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          Tablas
        </div>
        <div className="panel-body">
          {
            this.props.exerciseTable.map((obj, index) =>
              <p key = {index}>
                Name: {obj.name}
              </p>
            )
          }
        </div>
      </div>
    );
  }
}

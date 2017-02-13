import React from 'react';

const styles = require('./style.scss');
const style = {
  heading: {
    backgroundColor: 'rgba(232, 142, 58, 0.329412)',
  },
  panel: {
    padding: '0',
    margin: '3% 2% 0 0',
  },
};

export default class ShowMenuBody extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
        <div className="panel panel-default col-xs-12 col-md-5 col-lg-3" style={style.panel}>
          <div className="panel-heading" style={style.heading}>
             <p>
              <i className="glyphicon glyphicon-cutlery" />
              &nbsp; {this.props.timeFood}
             </p>
          </div>
          <div className="panel-body">
            <ul className="list-group">
              {
                this.props.foods.map((obj,index)=>
                  <li key={index} className="list-group-item" style={{margin: '2% 0 0 0'}}>
                    Food: {obj.nameFood}
                  </li>
                )
              }
            </ul>
          </div>
      </div>
    );
  }
}

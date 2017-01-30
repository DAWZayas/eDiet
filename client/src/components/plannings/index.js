import React from 'react';
const styles = require('./style.scss');
import images from '../../../images/progressMenu';

export default class Plannings extends React.Component{
  constructor(props) {
   super(props);
   this.state = {collapse: false};
  }

  render(){
    const handleCollapse = (e) => {
      e.preventDefault();
      this.setState({
        collapse: !this.state.collapse,
      });
      return false;
    };
    return(
      <div className="container">
        <div className="group">
          <img
            src={this.props.image}
            className={`${styles.Img} col-xs-6`}
            alt="Menu image"
          />
        <div className="panel panel-default col-xs-6">
            <div className="panel-heading">
              <span
                className={`glyphicon glyphicon-${this.state.collapse ? 'minus' : 'plus'}`}
                onClick={handleCollapse}
              />
              Diet: {this.props.name},
              Level: {this.props.level}
            </div>
            {this.state.collapse ?
              <div className="panel-body">
                <div className="col-xs-12">
                  Diets
                </div>
                <div className="col-xs-12">
                  Exercises
                </div>
              </div>
            : null}
          </div>
          <button className="btn btn-default">
            Follow!
          </button>
        </div>
      </div>
    );
  }
}

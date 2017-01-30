import React from 'react';
const styles = require('./style.scss');
import images from '../../../images/progressMenu';

export default class Progress extends React.Component{
  constructor(props) {
   super(props);
   this.state = {collapse: true};
  }

  render(){
    const handleCollapseClick = (e) => {
      e.preventDefault();
      this.setState({
        collapse: !this.state.collapse,
      });
      return false;
    };
    return(
      <span>
      {images.map( obj =>
        <div className="container" style={{marginTop: '5%'}}>
          <div className="row col-xs-6">
            <img src={obj.Image} className={`${styles.Img}`} alt="..."/>
          </div>
          <div className="row col-xs-6">
            <div className="panel panel-default">
                <div className="panel-heading">
                  Diet: {obj.name},  level: {obj.level}
                </div>
            </div>
            <center><button className="btn btn-default"> Follow </button></center>
          </div>
        </div>)}
      </span>
    );
  }

}

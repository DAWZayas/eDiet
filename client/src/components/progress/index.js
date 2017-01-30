import React from 'react';
const styles = require('./style.scss');
import images from '../../../images/progressMenu';

export default class Progress extends React.Component{
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
      <span>
        <div className="container" style={{marginTop: '5%'}}>
          <div className="row col-xs-6">
            <img src={this.props.image} className={`${styles.Img}`} alt="..."/>
          </div>
          <div className="row col-xs-6">
            <div className="panel panel-default">
                <div className="panel-heading">
                  <span className={`glyphicon glyphicon-${this.state.collapse ? 'minus' : 'plus'}`} onClick={handleCollapse}/>
                  Diet: {this.props.name},  level: {this.props.level}
                </div>
                {this.state.collapse ?
                  <div className="panel-body">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        Menus
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        Exercises
                      </div>
                    </div>
                  </div> : null}
            </div>
          <center><button className="btn btn-default"> Follow </button></center>
        </div>
      </div>
    </span>
    );
  }
}

import React, {Component} from 'react';
import {Link} from 'react-router';
const styles = require('./style.scss');

class Plannings extends Component{
  constructor(props) {
   super(props);
   this.state = {backgroundColor: 'rgb(255, 255, 255)'};
  }

  render(){
    const {name, level, image} = this.props;
    const style = {
      heading: {
        width: '100%',
        backgroundColor: `${this.state.backgroundColor}`
      }
    };

    return(
      <div className={`container ${styles.container}`}>
        <div className={`${styles.group}`}>
          <div className="col-xs-12 col-sm-6">
            <center>
              <img
                src={image}
                alt="Menu image"
              />
          </center>
          </div>
        <div className={`panel panel-default col-xs-12 col-sm-6 ${styles.info}`}>

          {
            level === 1 ? this.state.backgroundColor = 'rgb(33, 107, 56)'
            :
              level === 2 ? this.state.backgroundColor = 'rgb(228, 214, 32)'
              :
                level === 3 ? this.state.backgroundColor = 'rgb(200, 115, 37)'
                :
                  level === 4 ? this.state.backgroundColor = 'rgb(187, 51, 0)'
                  :
                    level === 5 ? this.state.backgroundColor = 'rgb(164, 3, 3)'
                    :
                      this.state.backgroundColor = 'rgb(255, 255, 255)'
          }
          <div className={`panel panel-heading ${styles.heading}`} style={style.heading}>
            <p>{name}</p>
            <p>Level:{level}</p>
          </div>
          <div className="panel panel-body">
            <div className={`${styles.commonElement} ${styles.menus}`}>
              <p>Menus</p>
            </div>
            <Link to={`/plannings/${level}/exercises`}>
              <div className={`${styles.commonElement} ${styles.exercises}`}>
                <p>Exercises</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
        <center>
          <button className="btn btn-default">
            Follow!
          </button>
        </center>
      </div>
    );
  }
}

export default Plannings;

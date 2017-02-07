import React, {Component} from 'react';
import {Link} from 'react-router';
const styles = require('./style.scss');

class Plannings extends Component{
  constructor(props) {
   super(props);
   this.state = {backgroundColor: 'rgb(255, 255, 255)'};
  }

  componentWillMount(){

    const {level}=this.props;
     level === 1 ? this.setState({backgroundColor: 'rgba(37, 88, 200, 0.2)'}) :
      level === 2 ? this.setState({backgroundColor: 'rgba(37, 88, 200, 0.4)'}) :
       level === 3 ? this.setState({backgroundColor:'rgba(37, 88, 200, 0.6)'}):
        level === 4 ? this.setState({backgroundColor:'rgba(37, 88, 200, 0.8)'}) :
         level === 5 ? this.setState({backgroundColor:'rgba(37, 88, 200, 1.2)'}) : null
  }

  render(){
    const {name, level, image} = this.props;
    const style = {
      heading: {
        width: '100%',
        backgroundColor: `${this.state.backgroundColor}`
      }
    };
    const handleFollow = (e) =>{
      const {level,userAuth} = this.props;
      e.preventDefault();
      this.props.updateMenus({level, id:userAuth.id})
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
          <div className={`col-xs-12 col-sm-6 `} >
            <div className={`panel panel-default ${styles.info}`}>
              <div className={`panel panel-heading`} style={style.heading}>
                <p>{name}</p>
                <p>Level:{level}</p>
              </div>
              <div className={`panel panel-body ${styles.body}`} >
                <div className={`${styles.commonElement} ${styles.menus}`}>
                  <Link to={`planning/menu/${level}`}><button  className={`btn btn-default ${styles.button1}`}>Menu</button></Link>
                </div>
                <div className={`${styles.commonElement} ${styles.exercises}`}>
                  <Link to={`/plannings/${level}/exercises`}><button className={`btn btn-default ${styles.button2}`}>Exercises</button></Link>
                </div>
              </div>
              <div className={`panel panel-footer ${styles.panel}`}>
                <button className={`${styles.followButton}`} onClick={handleFollow}>
                  Follow diet!
                </button>
              </div>
            </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Plannings;

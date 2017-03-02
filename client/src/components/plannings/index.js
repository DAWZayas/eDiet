import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import Input from '../inputFile/image';
import {server as serverConfig} from '../../../config';

const styles = require('./style.scss');
const style = {
  heading: {
    backgroundColor: 'rgb(255, 255, 255)',
    width: '100%',
    padding: '0',
    fontFamily: '\'Lobster\', cursive',
    textAlign: 'center',
    fontSize: '2em',
    borderBottom: 'none',
  },
  panel: {
    margin: '3% 5% 0 0',
    padding: '3% 0 3% 0'
  },
  body: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  footer: {
    backgroundColor: 'rgb(255, 255, 255)',
    boxShadow: 'none',
    borderTop: 'none',
  }
};

class Plannings extends Component{
  constructor(props) {
   super(props);
   this.state = {backgroundColor: 'rgb(255, 255, 255)', apple:null};
  }

  componentWillMount(){
    const {level}=this.props;
  }

  render(){
    const {name, level, image, userAuth} = this.props;

    const handleFollow = (e) =>{
      const {level,userAuth} = this.props;
      e.preventDefault();
      this.props.updateMenus({level, id: userAuth.id})
    };

    let cont = 1;

    return(
      <div className="panel panel-default col-xs-12 col-md-5" style={style.panel}>
        <div className="panel-heading" style={style.heading}>
          <p>{name}</p>
          <p>Level: {level}</p>
          <hr style={{width:'65%',border: '1px solid'}}/>

        </div>
        <div className={`panel-body ${style.body}`} style={style.body}>
          <div className={`${styles.efecto}`}>
            <img className="img-circle col-xs-12"
              src={`${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}/images/plannings/${image}`}
              alt="Menu image"
            />
          </div>
          <div className="col-xs-12" style={{display: 'inline-flex', justifyContent: 'center'}}>
            {!userAuth.role ?
              <div>
                <Link to={`planning/menu/${level}`} style={{marginRight: '1%'}}><button  className={`btn btn-default`}>Menu</button></Link>
                <Link to={`/plannings/${level}/exercises`}><button className={`btn btn-default`}>Exercises</button></Link>
              </div>
            :
              <Input route='plannings' name={cont++}/>
            }

          </div>
        </div>
        <div className="panel-footer" style={style.footer}>
          {!userAuth.role ?
            <center>
            <button className={`${styles.followButton}`} onClick={handleFollow}>
              Follow diet!
            </button>
            </center>
          :
            null
          }
        </div>
      </div>
    );
  }
}

export default Plannings;

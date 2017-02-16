import React, {Component} from 'react';
import {Link} from 'react-router';

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
    margin: '3% 2% 0 0',
    padding: '3%',
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

    let apple=[];
    for (let i = 0; i < this.props.level; i++) {
      apple.push(<span key={i} className='glyphicon glyphicon-apple' style={{color:'rgba(12, 145, 82, 0.6)'}}></span>);
    }

    this.setState({apple});
  }

  render(){
    const {name, level, image} = this.props;

    const handleFollow = (e) =>{
      const {level,userAuth} = this.props;
      e.preventDefault();
      this.props.updateMenus({level, id:userAuth.id})
    };

    return(
      <div className="panel panel-default col-xs-12 col-md-5 col-lg-4" style={style.panel}>
        <div className="panel-heading" style={style.heading}>
          <p>{name}</p>
          <p>Level: {level}</p>
          <hr style={{width:'65%',border: '1px solid'}}/>

        </div>
        <div className={`panel-body ${style.body}`} style={style.body}>
          <div className={`${styles.efecto}`}>
            <img className="img-circle col-xs-12"
              src={image}
              alt="Menu image"
            />
          </div>
          <div className="col-xs-12" style={{display: 'inline-flex', justifyContent: 'center'}}>
            <center>
                <Link to={`planning/menu/${level}`} style={{marginRight: '1%'}}><button  className={`btn btn-default`}>Menu</button></Link>
                <Link to={`/plannings/${level}/exercises`}><button className={`btn btn-default`}>Exercises</button></Link>
            </center>
          </div>
        </div>
        <div className="panel-footer" style={style.footer}>
          <center>
          <button className={`${styles.followButton}`} onClick={handleFollow}>
            Follow diet!
          </button>
          </center>
        </div>
      </div>
    );
  }
}

export default Plannings;

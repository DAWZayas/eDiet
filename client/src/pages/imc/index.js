// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

// our packages
import {registerAction} from '../../store/actions';
const style = require('./style.scss');

const mapStateToProps = (state) => ({
   userAuth: state.auth.user,
   user: state.user.user,
 });

 const mapDispatchToProps = (dispatch) => ({
   getUser:  payload => dispatch(getUserAction(payload)),
 });

class Imc extends React.Component{

  constructor(props){
    super(props);
    this.state = {show: null};
  }

  componentWillMount(){
    const {userAuth, getUser} = this.props;
    this.props.getUser({id: userAuth.id});
  }

  render(){

    const handleImc = (e) =>{
      e.preventDefault();

    };

    let weightUser;

    return (
      <div className={`container ${style.container}`}>
        <div className="row">
          <div className={`main ${style.main}`}>
            <h3 className={`${style.h3}`}>Please Sign Up, or <Link to="/login">Log In</Link></h3>
            <form role="form">
              <div className="form-group">
                <label htmlFor="inputUsername">Username:</label>
                <input
                  type="number"
                  className="form-control"
                  id="weightUser"
                  placeholder="Weight..."
                  ref={(i) => { weightUser = i; }}
                />
              </div>
              <button type="submit" className={`btn ${style.registerButton}`} onClick={handleClick}>Calculate</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Imc);

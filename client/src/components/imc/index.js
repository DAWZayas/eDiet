// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

// our packages
import {addImcAction, addWeightAction} from '../../store/actions';
const style = require('./style.scss');

const mapStateToProps = (state) => ({

 });

 const mapDispatchToProps = (dispatch) => ({
   addWeight: payload => dispatch(addWeightAction(payload)),
   addImc: payload => dispatch(addImcAction(payload))
 });

class Imc extends React.Component{

  constructor(props){
    super(props);
    this.state = {imc: null};
  }

  render(){
    const handleImc = (e) =>{
      e.preventDefault();
      const weight = weightUser.value;
      const height = this.props.userHeight * this.props.userHeight;
      const imc = weight / height;
      this.setState({imc});
      this.props.addWeight({id:this.props.userId, weight, imc: imc.toFixed(2)});
    };

    let weightUser;

    return (
      <div className={`container ${style.container}`}>
        <div className="row">
          <div className={`main ${style.main}`}>
            <form role="form">
              <div className="form-group">
                <label htmlFor="inputUsername">Your weight:</label>
                <input
                  type="number"
                  className="form-control"
                  id="weightUser"
                  placeholder="Weight (in kilograms)..."
                  ref={(i) => { weightUser = i; }}
                />
              </div>
              <button type="submit" className={`btn ${style.registerButton}`} onClick={handleImc}>Calculate</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Imc);

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
    const {user} = this.props;

    const handleImc = (e) =>{
      e.preventDefault();
      const weight = weightUser.value;
      const height = Math.pow(user.height, 2);
      const imc = weight / height;
      this.setState({imc});
      this.props.addWeight({id: user.id, weight, imc: imc.toFixed(2)});
    };

    let weightUser;

    return (
      <div className={`container ${style.container}`}>
        <div className="row">
          <div className={`main ${style.main}`}>
            <form role="form">
              <div className="form-group">
                <label htmlFor="inputUsername" className={`${style.miniTitle}`}>Your weight: </label>
                <input
                  type="number"
                  className="form-control"
                  id="weightUser"
                  placeholder="Weight (in kilograms)..."
                  ref={(i) => { weightUser = i; }}
                  value={user.weight ? user.weight[user.weight - 1] : 0}
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

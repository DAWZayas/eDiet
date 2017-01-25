import React from 'react';
import {connect} from 'react-redux';

import InputUpdate from '../../components/inputUpdate';
import {getUserAction} from '../../store/actions';

const mapStateToProps = (state) => ({
   userAuth: state.auth.user,
   user: state.user.user,
 });

 const mapDispatchToProps = (dispatch) => ({
   getUser:  (payload) => dispatch(getUserAction(payload)),
 });

class updateProfile extends React.Component{

  constructor(props){
    super(props);
    this.state= {id: null};
  }

  componentWillMount(props){
    this.setState({id: this.props.getUser({id: this.props.userAuth.id}).payload.id});
  }

  render(){
    return(
      <div>
        <InputUpdate id={this.state.id}/>
      </div>

    );
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(updateProfile);

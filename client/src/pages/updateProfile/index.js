import React from 'react';
import {connect} from 'react-redux';

import InputUpdate from '../../components/inputUpdate';
import {getUserAction} from '../../store/actions';

const styles = require('./style.scss');

const mapStateToProps = (state) => ({
   userAuth: state.auth.user,
   user: state.user.user,
 });

 const mapDispatchToProps = (dispatch) => ({
   getUser: (payload) => dispatch(getUserAction(payload)),
 });

class updateProfile extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(props){
    this.props.getUser({id: this.props.userAuth.id});
  }

  render(){
    return(
      <div className="container">
        <h1 className={`${styles.title}`}>Update your profile</h1>
        <InputUpdate user={this.props.user} />
      </div>
    );
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(updateProfile);

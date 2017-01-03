// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import _ from 'lodash';

import NavBar from '../components/navBar';
import Aside from '../components/aside';
import {logoutAction} from '../store/actions';

const mapStateToProps = (state) => ({
   user: state.auth.user,
   token: state.auth.token,
 });

const mapDispatchToProps = (dispatch) => ({
  doLogOut: () => dispatch(logoutAction()),
});

class App extends React.Component {

  render(){
    const {children, token, doLogOut, user, navToLogin} = this.props;

    return(
    <div className="bg-main">

        <NavBar {...this.props} />
        {children}
        <Aside />

    </div>
    );
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(App);

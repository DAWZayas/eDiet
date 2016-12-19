// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import _ from 'lodash';

import NavBar from '../components/navBar';
import Footer from '../components/Footer';
import {logoutAction} from '../store/actions';

const mapStateToProps = (state) => ({
   user: state.auth.user,
   token: state.auth.token,
 })

const mapDispatchToProps = (dispatch) => ({
  doLogOut: () => dispatch(logoutAction()),
});

class App extends React.Component {

  render(){
    const {children, token, doLogOut} = this.props;

    return(
    <div className="container">
      <NavBar {...this.props} />
      {children}
      <Footer />
    </div>
    );
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(App);

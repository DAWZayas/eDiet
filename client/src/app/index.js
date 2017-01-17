// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import _ from 'lodash';
import {push} from 'react-router-redux';

import NavBar from '../components/navBar';
import Aside from '../components/aside';
import {logoutAction} from '../store/actions';
import Footer from '../components/footer';

const styles = require('./style.scss');

const mapStateToProps = (state) => ({
   user: state.auth.user,
   token: state.auth.token,
   route: state.routing.locationBeforeTransitions.pathname,
 });

const mapDispatchToProps = (dispatch) => ({
  doLogOut: () => dispatch(logoutAction()),
  navToLogin: () => dispatch(push('/login')),
});

class App extends React.Component {

  render(){
    const {children, token, doLogOut, user, navToLogin, route} = this.props;

    return(
      <div className={`bg-main ${styles.body}`}>
          <NavBar {...this.props} />
          {children}
          <Aside />
          <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(App);

import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {} from '../../store/actions';
import Slider from '../../components/slider';
import CompHome from '../../components/bodyHome';
import Footer from '../../components/footer';
const styles = require('./style.scss');

const mapDispatchToProps = (dispatch) => ({
});

const Home = () => (
<div className="bg-main">
  <Slider/>
  <div className={`container ${styles.container}`}>
    <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
    <br/>
    <CompHome />
  </div>
  <Footer />
</div>
);

export default connect(null, mapDispatchToProps)(Home);

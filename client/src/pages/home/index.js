import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {} from '../../store/actions';
import Slider from '../../components/slider';
import ChangeSlider from '../../components/changeSlider'
import CompHome from '../../components/bodyHome';
import Footer from '../../components/footer';
const styles = require('./style.scss');

const mapStateToProps = state => ({
  user: state.auth.user,
});

const Home = ({user}) => (
  <div className="bg-main">
    {user ?
      user.role ?
        <ChangeSlider />
      : <Slider/>
    : <Slider/>}
    <div className={`container ${styles.container}`}>
      <CompHome />
    </div>
    <Footer />
  </div>
);

export default connect(mapStateToProps, null)(Home);

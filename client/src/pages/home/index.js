import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {} from '../../store/actions';
import Slider from '../../components/slider';
/*const mapStateToProps = (state) => ({
//  world: state.helloWorld.world,
dropdown: state.dropdowns.dropdown,
});*/

const mapDispatchToProps = (dispatch) => ({


});


const Home = () => (
<div className="bg-main">
  <Slider/>
</div>
);






  /*
);*/

export default connect(null, mapDispatchToProps)(Home);

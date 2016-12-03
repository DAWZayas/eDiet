import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {} from '../../store/actions';

/*const mapStateToProps = (state) => ({
//  world: state.helloWorld.world,
dropdown: state.dropdowns.dropdown,
});*/

const mapDispatchToProps = (dispatch) => ({


});


const Home = () => (
<div className="container">
    <h1>Hello !</h1>
    <button  >Click me!</button>
    <div>
      <Link to="/other">other</Link>
    </div>
  </div>
);






  /*
);*/

export default connect(null, mapDispatchToProps)(Home);

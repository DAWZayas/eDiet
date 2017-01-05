import React, {Component} from 'react';

export default class bodyHome extends Component {

  constructor(){
    super();
    this.state = {show : true };
  }

  render() {

    const handleShow = () => this.setState({show: !this.state.show});

    return (
        <div className = "col-sm-12 col-md-6 ">
          <center>
            <h3>Ejercicios </h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCbRR1Uxp8a-852UxU2-QyM_IBF5F1F8awMbgzJtZXEJ3hk89RAw" className="img-circle" alt="..."/>
          </center>
          <br/>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          {this.state.show ? <button onClick={handleShow} type="button" className="btn btn-default"> ver mas </button>
            : <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          }
        </div>
    );
  }
}

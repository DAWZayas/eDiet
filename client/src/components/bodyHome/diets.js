import React, {Component} from 'react';
const styles = require('./style.scss');

export default class Diets extends Component {
  constructor(){
    super();
    this.state = {show : true };
  }
  render() {
    const handleShow = () => this.setState({show: !this.state.show});
    return (
        <div className ="col-sm-12 col-md-6 ">
          <center>
            <h3 className={`${styles.title}`}>Diet</h3>
            <img src="../../../images/home/dietImg.jpg" className={`${styles.dietImg}`} alt="..."/>
          </center>
          <br/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          {this.state.show ?
            <button onClick={handleShow} type="button" className="btn btn-default">
              More
            </button>
          :
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          }
        </div>
    );
  }
}

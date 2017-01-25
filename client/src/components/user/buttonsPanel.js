import React from 'react';
import {Link} from 'react-router';

const styles = require('./style.scss');

export default class ButttonsUser extends React.Component {

  constructor(props){
    super(props);
  }
  render(){
    const {user} = this.props;
    return (
    <span>
     {user ? !user.role ?
        <div className="panel-footer">
          <div className={`${styles.dietButtons}`}>
            <button className="btn btn-default">
              <Link to='#'>See my menus</Link>
            </button>
            <Link to='#'></Link>
              <button className="btn btn-default">See my exercise</button>
          </div>
        </div>
      : null :null}
    </span>
    );
  }
}

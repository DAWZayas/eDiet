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
            <Link to='#'>
              <button className="btn btn-default"> See my menus </button>
            </Link>
            <Link to='#'>
              <button className="btn btn-default">See my exercise</button>
            </Link>
          </div>
        </div>
     : null :null}
    </span>
    );
  }
}

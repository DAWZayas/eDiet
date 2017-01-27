import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
const styles = require('./style.scss');

export default class Logged extends Component {
  render() {
    const {user} = this.props;
    return (
        <div className={`navbar-header ${styles.logged}`}>
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse-1" aria-expanded="false">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            {user ?
                <Link to='/user' className=" navbar-brand">
                  Logged as {user.login}{user.provider ? ` (${user.provider})` : null}
                </Link>
            :
              null
            }
      </div>
    );
  }
}

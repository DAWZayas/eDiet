// npm packages
import React, {Component} from 'react';

import style from './style.js';
import UlCompany from './ulCompany';
import UlOther from './ulOther';
import UlLegal from './ulLegal';
import UlSocial from './ulSocial';

export default class Footer extends Component {
  render () {
    return (
      <footer className="footer" style={style.footer}>
        <div className="container">
          <nav className="row">
            <div className="col-xs-12 col-md-2">
              <div className="footer-logo">
                <a href="#">
                  <img src="." alt="LOGO" />
                </a>
              </div>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-2">
              <p className="nav-title">Company</p>
              <UlCompany style={style.a} />
            </div>
            <div className="col-xs-6 col-sm-4 col-md-2">
              <p className="nav-title">Otro</p>
              <UlOther style={style.a} />
            </div>
            <div className="col-xs-6 col-sm-4 col-md-2">
              <p className="nav-title">Privacy Statement</p>
              <UlLegal style={style.a} />
            </div>
            <div className="col-xs-12 col-md-4 col-social">
              <UlSocial style={style.a} />
            </div>
          </nav>
        </div>
      </footer>
    );
  }
}

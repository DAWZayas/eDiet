// npm packages
import React from 'react';

import style from './style.css';
import iconFont from '../../../fonts/font-awesome.min.css';

export default () => (
  <footer className="footer footer-default">
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
          <ul className="nav">
            <li>
              <a href="#" id="nav-link-about">
                Acerca de
              </a>
            </li>
            <li>
              <a href="#" id="nav-link-client">
                Atención al cliente
              </a>
            </li>
            <li>
              <a href="#" id="nav-link-news">
                Noticias
              </a>
            </li>
          </ul>
        </div>
        <div className="col-xs-6 col-sm-4 col-md-2">
          <p className="nav-title">Otro</p>
          <ul className="nav">
            <li>
              <a href="#" id="nav-link-other">
                Otro
              </a>
            </li>
            <li>
              <a href="#" id="nav-link-other">
                otro
              </a>
            </li>
            <li>
              <a href="#" id="nav-link-other">
                otro
              </a>
            </li>
          </ul>
        </div>
        <div className="col-xs-6 col-sm-4 col-md-2">
          <p className="nav-title">Otro</p>
          <ul className="nav">
            <li>
              <a href="#" id="nav-link-other">
                Otro
              </a>
            </li>
            <li>
              <a href="#" id="nav-link-other">
                otro
              </a>
            </li>
            <li>
              <a href="#" id="nav-link-other">
                otro
              </a>
            </li>
          </ul>
        </div>
        <div className="col-xs-12 col-md-4 col-social">
          <ul className="nav">
            <li className="col-xs-2">
              <a href="#">
                <p>INS</p>
              </a>
            </li>
            <li className="col-xs-2">
              <a href="#">
                <p>FACE</p>
              </a>
            </li>
            <li className="col-xs-2">
              <a href="#">
                <p>TWI</p>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </footer>
);

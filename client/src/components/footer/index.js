import React from 'react';
const styles = require('./style.scss');

export default class Footer extends React.Component {
  render() {
    return (
      <div className={`footer ${styles.footer}`}>
        <div className={`row`}>
          <center>
            <div className={`col-xs-12 ${styles.social}`}>
              <a href="https://www.facebook.com">
                <i className="fa fa-facebook-square fa-3x"></i>
              </a>
              <a href="https://twitter.com">
                <i className="fa fa-twitter-square fa-3x"></i>
              </a>
              <a href="https://instagram.com">
                <i className="fa fa-instagram fa-3x"></i>
              </a>
            </div>
            <div className={`${styles.links}`}>
              <p className="footer-links">
                <a href="#">Home</a>
                ·
                <a href="#">Legal & Privacy</a>
                ·
                <a href="#">About eDiet</a>
                ·
                <a href="#">Faq</a>
                ·
                <a href="#">Contact</a>
              </p>
            </div>
          </center>
        </div>
      </div>
    );
  }
};

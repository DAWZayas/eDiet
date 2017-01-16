import React from 'react';

export default class Footer extends React.Component {
  render() {

    const footerStyle = {
      color: 'white',
      backgroundColor: 'grey',
	    bottom: '0',
      position:'relative',
      width:'100%',
      margin: "2% 0 0 0",
    };

    return (
      <div className="footer" style={footerStyle}>
      <div className="row">
        <br/>
          <div className="col-md-4">
            <center>
              <img src="http://i48.tinypic.com/2gwgj21.jpg" className="img" alt="the-brains"/>
              <br/>
              <br/>
              <p className="footertext">E-mail: info@ediet.com<br/>
            </p></center>
          </div>
          <div className="col-md-4">

            <center>
              <h4 className="footertext">Siguenos</h4>
              <div className="row">
              <center>
                <a href="https://www.facebook.com/bootsnipp"><i className="fa fa-facebook-square fa-3x social"></i></a>
                &emsp;
                <a href="https://twitter.com/bootsnipp"><i className="fa fa-twitter-square fa-3x social"></i></a>
                &emsp;
                <a href="https://plus.google.com/+Bootsnipp-page"><i className="fa fa-google-plus-square fa-3x social"></i></a>
                &emsp;
                <a href="https://instagram.com/+Bootsnipp-page"><i className="fa fa-instagram fa-3x social"></i></a>

              </center>
        </div></center>
          </div>
          <div className="col-md-4">
            <center>
              <br/>
                <p>Términos</p>
                <p> Política Privacidad</p>
                <p>FAQS</p>
            </center>
          </div>
        </div>

      </div>
    );
  }
};

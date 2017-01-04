import React from 'react';

export default class Footer extends React.Component {
  render() {
    
    const footerStyle = {
      color: 'white',
      backgroundColor: 'black',
	    bottom: 0,
      margin: "2% 0 0 0",
    };

    return (
      <div className="footer" style={footerStyle}>
      <div className="row">
        <h3 className="footertext"> &emsp; About Us:</h3>
        <br/>
          <div className="col-md-4">
            <center>
              <img src="http://oi60.tinypic.com/w8lycl.jpg" className="img-circle" alt="the-brains"/>
              <br/>
              <h4 className="footertext">Programmer</h4>
              <p className="footertext">You can thank all the crazy programming here to this guy.<br/>
            </p></center>
          </div>
          <div className="col-md-4">
            <center>
              <img src="http://oi60.tinypic.com/2z7enpc.jpg" className="img-circle" alt="..."/>
              <br/>
              <h4 className="footertext">Artist</h4>
              <p className="footertext">All the images here are hand drawn by this man.<br/>
            </p></center>
          </div>
          <div className="col-md-4">
            <center>
              <img src="http://oi61.tinypic.com/307n6ux.jpg" className="img-circle" alt="..."/>
              <br/>
              <h4 className="footertext">Designer</h4>
              <p className="footertext">This pretty site and the copy it holds are all thanks to this guy.<br/>
            </p></center>
          </div>
        </div>
        <div className="row">
              <br/>
              <center>
                <a href="https://www.facebook.com/bootsnipp"><i className="fa fa-facebook-square fa-3x social"></i></a>
                &emsp;
                <a href="https://twitter.com/bootsnipp"><i className="fa fa-twitter-square fa-3x social"></i></a>
                &emsp;
                <a href="https://plus.google.com/+Bootsnipp-page"><i className="fa fa-google-plus-square fa-3x social"></i></a>
                &emsp;
                <a href="mailto:bootsnipp@gmail.com"><i className="fa fa-envelope-square fa-3x social"></i></a>
                &emsp;
                <span className="footertext">  Copyright 2014 </span>
              </center>
        </div>
      </div>
    );
  }
};

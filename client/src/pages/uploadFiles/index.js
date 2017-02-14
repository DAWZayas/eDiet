import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
 });

const mapDispatchToProps = (dispatch) => ({
});

const Plannigns =() =>{
  return(
    <div className="container">
      <div>
        <p>PICTURES</p>
        <p></p>
      </div>
      <div>
        <p>TEXTOS</p>
      </div>
    </div>
  );
}

export default connect (mapStateToProps, mapDispatchToProps)(Plannigns);

import React from 'react';
import {connect} from 'react-redux';

import {updateHeightAction} from '../../store/actions';

const mapDispatchToProps = (dispatch) => ({
  updateHeight: payload => dispatch(updateHeightAction(payload)),
});

const updateHeight = ({updateHeight, id}) => {
  let newHeight;

  const handleUpdateHeight = (e) => {
    e.preventDefault();
    const height = newHeight.value;
    updateHeight({id:id, height});
  };

  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <p> Update Height </p>
      </div>
      <div className="panel-footer">
      <span className="input-group">
        <input className="input-group-addon"
          type="text"
          className="form-control"
          id="newName"
          placeholder="Enter your new height..."
          ref={(i) => {newHeight= i; }}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-default" onClick={handleUpdateHeight} >yes</button>
        </span>
      </span>
      </div>
    </div>
  );
}

export default connect (null, mapDispatchToProps)(updateHeight);

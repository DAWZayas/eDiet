import React from 'react';
import {connect} from 'react-redux';

import {updateHeightAction} from '../../store/actions';
import ModalHeight from '../modalUpdateUser/modalHeight';
const styles = require('./style.scss');

const style = {
  header: {
    borderBottom: 'none',
    backgroundColor: 'rgba(232, 142, 58, 0.33)',
  },
  panel: {
    margin: '5% 0 0 0',
  },
};

const mapDispatchToProps = (dispatch) => ({
  updateHeight: payload => dispatch(updateHeightAction(payload)),
});

const updateHeight = ({updateHeight, id}) => {
  let newHeight;



  const height = () => {
    return newHeight.value;
  };

  return (
    <div className="panel panel-default" style={style.panel}>
      <div className="panel-heading" style={style.header}>
        <p>
          Update Height
        </p>
      </div>
      <div className={`panel-body ${styles.body}`}>
        <div className="col-xs-12">
          <input
            type="number"
            className="form-control"
            id="newHeight"
            placeholder="New height (in metres)..."
            ref={(i) => { newHeight = i; }}
          />
        </div>
        <center>
        <ModalHeight id={id} height={height} update={updateHeight} />
        </center>
      </div>
    </div>
  );
}

export default connect (null, mapDispatchToProps)(updateHeight);

import React, {Component} from 'react';
import {connect} from 'react-redux';

import {updateHeightAction} from '../../store/actions';
import ModalHeight from '../modalUpdateUser/modalHeight';
const styles = require('./style.scss');

const mapDispatchToProps = (dispatch) => ({
  updateHeight: payload => dispatch(updateHeightAction(payload)),
});

class updateHeight extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const {updateHeight, user} = this.props
    let newHeight;

    const height = () => {
      return newHeight.value;
    };

    return (
      <div className={`${styles.element}`}>
        <h2>Height</h2>
        <div>
          <div className="col-xs-12">
            <input
              type="number"
              className="form-control"
              id="newHeight"
              placeholder="New height (in metres)..."
              ref={(i) => { newHeight = i; }}
              value={user.height ? user.height : 0}
              min='0'
            />
          </div>
          <center>
          <ModalHeight id={user.id} height={height} update={updateHeight} />
          </center>
        </div>
      </div>
    );
  }
}

export default connect (null, mapDispatchToProps)(updateHeight);

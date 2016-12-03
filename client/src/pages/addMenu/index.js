// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

// our packages
import {addMenuAction} from '../../store/actions';

const mapStateToProps = state => ({
  token: state.auth.token,
  error: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
  onaddMenuClick: params => dispatch(addMenuAction(params)),
});


const Menu = ({onaddMenuClick, token, error}) => {
    let addMenuInput;

    const handleClick = (e) => {
      e.preventDefault();
      onaddMenuClick({
        addMenuInput: addMenuInput.value,
      });
    };

  return (
    <div className="panel panel-default">
      <div className="panel-heading">Create Menu</div>
      <div className="panel-footer">
        <form className="form-horizontal">
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="addMenuInput"
              placeholder="Enter your answer..."
              ref={(i) => { addMenuInput = i; }}
            />
          </div>
          <button type="submit" className="btn btn-default" onClick={handleClick}>
            Menu Name
          </button>
        </form>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

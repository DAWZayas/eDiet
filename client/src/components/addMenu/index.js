import React from 'react';

export default () => {
    let addMenuInput='';

    const handleClick = (e) => {
      e.preventDefault();
      addMenuInput.value = '';
      return false;
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

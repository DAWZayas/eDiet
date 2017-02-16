import React, {Component} from 'react';
import {connect} from 'react-redux';

import {uploadTextAction} from '../../store/actions';

 const mapDispatchToProps = (dispatch) => ({
   uploadText: payload => dispatch(uploadTextAction(payload)),
 });

let text;

class Text extends Component {
  constructor(props) {
    super(props);

    this.state = {text: '', name: ''};
  }

  render() {
    const {route} = this.props;

    const handleChange = event => {
      const reader = new FileReader();
      const file = event.target.files[0];
      const name = event.target.files[0].name;
      document.getElementById('uploadFile').textContent = event.target.files[0].name;
      reader.onload = (e) => {
        text = e.target.result;
        this.setState({text, name});
      };
      reader.readAsDataURL(file);

    }

    const handleUpdate = e => {
      e.preventDefault();
      const text = encodeURIComponent(this.state.text);

      this.props.uploadText({text, name: this.state.name, route});
    }

    return (
      <div>
        <p>
          Change this text
        </p>
        <label className="btn btn-default">
          <i className="fa fa-upload fa-2x" aria-hidden="true" /> Select file
          <input
            type="file"
            accept="text/plain"
            style={{display: 'none'}}
            onChange = {handleChange}
          />
        </label>
       <span id="uploadFile"></span>
       <button className="btn btn-default" onClick={handleUpdate}>
          Upload File
       </button>
      </div>
    );
  }
}

export default connect (null, mapDispatchToProps)(Text);

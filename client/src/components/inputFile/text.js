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
    const {route, name} = this.props;

    const handleChange = event => {
      const reader = new FileReader();
      const file = event.target.files[0];
      const extension = event.target.files[0].name.split('.');
      const textName = name + '.' + extension[1];
      document.getElementById('uploadFile').textContent = event.target.files[0].name;
      reader.onload = (e) => {
        text = e.target.result;
        this.setState({text, name: textName});
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
        <label className="btn btn-default">
          <i className="fa fa-upload" aria-hidden="true" />
          <input
            type="file"
            accept="text/plain"
            style={{display: 'none'}}
            onChange = {handleChange}
          />
        </label>
        <button className="btn btn-default" onClick={handleUpdate}>
          Upload
        </button>
        <div id="uploadFile"></div>
     </div>
    );
  }
}

export default connect (null, mapDispatchToProps)(Text);
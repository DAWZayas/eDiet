import React, {Component} from 'react';
import {connect} from 'react-redux';

import {uploadPictureAction} from '../../store/actions';

 const mapDispatchToProps = (dispatch) => ({
   uploadPicture: payload => dispatch(uploadPictureAction(payload)),
 });

let image;

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {image: '', name: ''};
  }

  render() {
    const {route} = this.props;

    const handleChange = event => {
      const reader = new FileReader();
      const file = event.target.files[0];
      const name = event.target.files[0].name;
      document.getElementById('uploadFile').textContent = event.target.files[0].name;
      reader.onload = (e) => {
        image = e.target.result;
        this.setState({image, name});
      };
      reader.readAsDataURL(file);
    }

    const handleUpdate = e => {
      e.preventDefault();
      const image = encodeURIComponent(this.state.image);

      this.props.uploadPicture({image, name: this.state.name, route});
    }

    return (
      <div>
        <p>
          Change slider pictures
        </p>
        <label className="btn btn-default">
          <i className="fa fa-upload fa-2x" aria-hidden="true" /> Select file
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
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

export default connect (null, mapDispatchToProps)(Image);

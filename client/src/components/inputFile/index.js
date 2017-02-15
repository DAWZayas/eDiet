import React, {Component} from 'react';
import {connect} from 'react-redux';

import {uploadPictureAction} from '../../store/actions';

const mapStateToProps = (state) => ({
  images: state.uploads.images
 });

 const mapDispatchToProps = (dispatch) => ({
   uploadPicture: payload => dispatch(uploadPictureAction(payload)),
 });

let image;

class UploadPicture extends Component {
  constructor(props) {
    super(props);

    this.state = {image: ''};
  }

  render() {
    const {route} = this.props;

    const handleChange = event => {
      const reader = new FileReader();
      const file = event.target.files[0];
      document.getElementById('uploadFile').textContent = event.target.files[0].name;
      reader.onload = (e) => {
        image = e.target.result;
        this.setState({image: image});
      };
      reader.readAsDataURL(file)

    }

    const handleUpdate = e => {
      e.preventDefault();
      const image = encodeURIComponent(this.state.image);
  
      this.props.uploadPicture({image, route});
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
            accept="image/png, image/jpeg"
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

export default connect (mapStateToProps, mapDispatchToProps)(UploadPicture);

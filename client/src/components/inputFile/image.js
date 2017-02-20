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
    const {route, name} = this.props;

    const handleChange = event => {
      const reader = new FileReader();
      const file = event.target.files[0];
      const extension = event.target.files[0].name.split('.');
      const imageName = name + '.' + extension[1];
      document.getElementById('uploadFile').textContent = event.target.files[0].name;
      reader.onload = (e) => {
        image = e.target.result;
        this.setState({image, name: imageName});
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
        <label className="btn btn-default">
          <i className="fa fa-upload" aria-hidden="true" />
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
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

export default connect (null, mapDispatchToProps)(Image);

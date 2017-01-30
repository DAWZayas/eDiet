import React, {Component} from 'react';
import Dropzone from 'react-dropzone';

let tableName;
let tableLevel;

let styles = require('./style.scss');
let footer = {
  borderTop: 'none',
  backgroundColor: 'rgb(255, 255, 255)',
};

export default class AddTable extends Component {
  constructor() {
    super();
    this.onDrop = this.onDrop.bind(this);
    this.onOpenClick = this.onOpenClick.bind(this);
  }

  componentWillMount() {
    this.setState({files: []});
  };

  onDrop(acceptedFiles) {
    this.setState({files: acceptedFiles});
  };

  onOpenClick() {
    this.dropzone.open();
  };

  render(){
    const handleCreate = (e) => {
      e.preventDefault();
      const name = tableName.value;
      const level = tableLevel.value;
      const image = this.state.files[0];
      this.props.createTable({name, level, image});
      clearFields();
      return false;
    };

    const clearFields = () => {
      tableName.value = '';
      tableName.placeholder="Table name...";
      tableLevel.value = '';
      tableLevel.placeholder="Table level...";
      return false;
    };

    return(
      <div className={`panel panel-default ${styles.container}`}>
        <div className="panel-heading">
          Add table
        </div>
        <div className={`panel-body`}>
          <div>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="tableName"
                placeholder="Table name..."
                ref={(i) => { tableName = i; }}
              />
            </div>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="tableLevel"
                placeholder="Table level..."
                ref={(i) => { tableLevel = i; }}
              />
            </div>
          </div>
        </div>
        <div>
            <Dropzone ref={(node) => { this.dropzone = node; }} onDrop={this.onDrop} >
                <div>Drop here the image</div>
            </Dropzone>
            <button type="button" onClick={this.onOpenClick}>
                Open Dropzone
            </button>
            {this.state.files.length > 0 ? <div>
            <div>{this.state.files.map((file, index) => <img src={file.preview} key={index}/> )}</div>
            </div> : null}
        </div>
        <div className={`panel-footer ${styles.footer}`} style={footer}>
          <button type="submit" className="btn btn-default" onClick={handleCreate}>
            Create
          </button>
        </div>
      </div>
    );
  }
}

import React, {Component} from 'react';
import Modal from 'react-modal';

let customStyles = {
  overlay: {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(40, 39, 39, 0.7)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
};

let button = {
  color: 'rgb(57, 144, 128)',
};

export default class DeleteModal extends Component {
  constructor () {
    super();
    this.state = {modalIsOpen: false};
  }

  render () {
    const openModal = () => {
      this.setState({modalIsOpen: true});
    };

    const closeModal = () => {
      this.setState({modalIsOpen: false});
    };

    const handleDelete = e => {
      e.preventDefault();
      const array = this.props.route.split('/');
      const table = array[array.length - 1];
      const name = this.props.deleted.name;
      this.props.deleteExercise({table, name});
      closeModal();
      return false;
    };

    return (
      <div>
        <button className="btn btn-default" onClick={openModal} style={button}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Delete exercise"
        >
        <div className="container">
          <a className="glyphicon glyphicon-remove pull-right" role="button" onClick={this.closeModal} />
          <h4> Are you sure that you want to delete this exercise? </h4>
          <span>
            <button type="submit" className="btn btn-danger" onClick={this.closeModal} style={{marginRight: '2%'}}>No</button>
            <button type="submit" className="btn btn-success" onClick={handleDelete}>Yes</button>
          </span>
        </div>
        </Modal>
      </div>
    );
  }
}

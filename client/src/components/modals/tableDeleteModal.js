import React, {Component} from 'react';
import Modal from 'react-modal';

let customStyles = {
  overlay: {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(40, 39, 39, 0.25)',
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
      const name = this.props.deleted.name;
      this.props.deleteTable({name});
      closeModal();
      return false;
    };

    return (
      <div>
        <button className="btn btn-default" onClick={openModal}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Borrar tabla"
        >
          <p>
            ¿Está seguro de que desea borrar la tabla?
          </p>

          <div className="input-group-btn">
            <button className="btn btn-default alert-danger" onClick={handleDelete}>
              Borrar
            </button>
            <button className="btn btn-default close" onClick={closeModal}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}
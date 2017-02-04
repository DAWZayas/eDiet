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
  color: 'rgb(0, 0, 0)',
};

export default class UpdateModal extends Component {
  constructor () {
    super();
    this.state = {modalIsOpen: false};
  }

  render () {
    const {updateHeight, height, id} = this.props;

    const openModal = () => {
      this.setState({modalIsOpen: true});
    };

    const closeModal = () => {
      this.setState({modalIsOpen: false});
    };

    const handleDelete = e => {
      e.preventDefault();
      updateHeight({id, height});
      return false;
    };

    return (
      <div>
        <button className="btn btn-default" onClick={openModal} style={button}>
          Update
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Update height"
        >
          <p>
            Is correct your height ({height})?
            (You can only update it once in a month)
          </p>

          <div className="input-group-btn">
            <button className="btn btn-default alert-default" onClick={handleDelete}>
              Update
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

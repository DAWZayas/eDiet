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
  color: 'rgb(255, 255, 255)',
};

export default class DeleteModal extends Component {
  constructor () {
    super();
    this.state = {modalIsOpen: false};
  }

  render () {
    const {logOut, deleteUser, id, navToLogin} = this.props;

    const openModal = () => {
      this.setState({modalIsOpen: true});
    };

    const closeModal = () => {
      this.setState({modalIsOpen: false});
    };

    const handleDelete = e => {
      e.preventDefault();
      deleteUser({id});
      logOut();
      navToLogin();
      closeModal();
      return false;
    };

    return (
      <div>
        <button className="btn btn-danger" onClick={openModal} style={button}>
          Delete user
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Delete user"
        >
          <p>
            Are you sure you want to delete your user?
          </p>

          <div className="input-group-btn">
            <button className="btn btn-default alert-danger" onClick={handleDelete}>
              Delete
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

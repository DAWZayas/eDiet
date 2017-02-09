import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(40, 39, 39, 0.7)',
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


export default class UpdateMail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {

    const handleDeleteUser = (e) => {
      e.preventDefault();
      this.props.deleteUser({id: this.props.id});
      this.closeModal();
      this.props.logOut();
      this.props.navToLogin();
    };

    return (
      <span>
      <center>
        <button type="submit" className="btn btn-danger" onClick={this.openModal}>
          Delete User
        </button>
      </center>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <div className="container">
          <a className="glyphicon glyphicon-remove pull-right" role="button" onClick={this.closeModal} />
          <h4> Are you sure that you update your height ?   </h4>
          <span>
            <button type="submit" className="btn btn-danger" onClick={this.closeModal} style={{marginRight: '2%'}}>No</button>
            <button type="submit" className="btn btn-success" onClick={handleDeleteUser}>Yes</button>
          </span>
        </div>
        </Modal>
      </span>
    );
  }
}

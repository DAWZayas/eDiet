import React from 'react';
import Modal from 'react-modal';

const customStyles = {
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

    const handleUpdateHeight = (e) => {
      e.preventDefault();
      const height = this.props.height();
      this.props.update({id: this.props.id, height});
      this.closeModal();
    };

    return (
      <span>
      <button type="submit" style={{float: 'right'}} className="btn btn-default" onClick={this.openModal}>
        Update
      </button>
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
              <span className="input-group-btn">
                <button type="submit" className="btn btn-default " onClick={this.closeModal}>no</button>
                <button type="submit" className="btn btn-default " onClick={handleUpdateHeight}>yes</button>
              </span>
          </span>
        </div>
        </Modal>
      </span>
    );
  }
}

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


export default class App extends React.Component {
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
    let newNameMenu;

    const handleDeleteMenu = (e) => {
      e.preventDefault();
      this.props.deletes({name:this.props.menu});
      this.closeModal();
    };

    const handleDeleteTimeFood = (e) => {
      e.preventDefault();
      this.props.deletes({name:this.props.menu, timeFood: this.props.timeFood});
      this.closeModal();
    };

    const handleDeleteFood = (e) => {
      e.preventDefault();
      this.props.deletes({nameMenu:this.props.menu, nameTimeFood: this.props.timeFood, food: this.props.food});
      this.closeModal();
    };

    return (
      <span>
        <button type="submit" style={{float: 'right'}} className="glyphicon glyphicon-trash btn" onClick={this.openModal}> </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <div className="container">
          <a className="glyphicon glyphicon-remove pull-right" role="button" onClick={this.closeModal} />
          <h4> Delete  </h4>
          <span>
            {/Menu/.test(this.props.route) ?
              <span className="input-group-btn">
                <button type="submit" className="btn" onClick={this.closeModal}>no</button>
                <button type="submit" className="btn" onClick={handleDeleteMenu}>yes</button>
              </span> : null}
            {/timeFood/.test(this.props.route) ?
              <span className="input-group-btn">
              <button type="submit" className="btn " onClick={this.closeModal}>no</button>
              <button type="submit" className="btn " onClick={handleDeleteTimeFood}>yes</button>
              </span> : null}
            {/food/.test(this.props.route) ?
              <span className="input-group-btn">
                <button type="submit" className="btn" onClick={this.closeModal}>no</button>
                <button type="submit" className="btn " onClick={handleDeleteFood}>yes</button>
              </span>: null }
          </span>
        </div>
        </Modal>
      </span>
    );
  }
}

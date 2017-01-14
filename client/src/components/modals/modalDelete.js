import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '25%',
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
    console.log(...this.props);
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
        <button type="submit" style={{float: 'right'}} className="btn btn-default " onClick={this.openModal}> Delete menu</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <div className="container">
          <a className="glyphicon glyphicon-remove pull-right" role="button" onClick={this.closeModal} />
          <h4> Update Menu </h4>
          <span>
            {/Menu/.test(this.props.route) ?
              <span className="input-group-btn">
                <button type="submit" className="btn btn-default " onClick={this.closeModal}>no</button>
                <button type="submit" className="btn btn-default " onClick={handleDeleteMenu}>yes</button>
              </span> : null}
            {/timeFood/.test(this.props.route) ?
              <span className="input-group-btn">
              <button type="submit" className="btn btn-default " onClick={this.closeModal}>no</button>
              <button type="submit" className="btn btn-default " onClick={handleDeleteTimeFood}>yes</button>
              </span> : null}
            {/food/.test(this.props.route) ?
              <span className="input-group-btn">
                <button type="submit" className="btn btn-default " onClick={this.closeModal}>no</button>
                <button type="submit" className="btn btn-default " onClick={handleDeleteFood}>yes</button>
              </span>: null }
          </span>
        </div>
        </Modal>
      </span>
    );
  }
}

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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false, color: null };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount(){
    /Menu/.test(this.props.route) ? this.setState({color : 'rgb(232,142,58)'}) : null;
    /timeFood/.test(this.props.route) ? this.setState({color : 'rgb(12,145,82)'}) : null;
    /food/.test(this.props.route) ? this.setState({color : 'rgb(0,0,0)'}) : null;
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
        <button type="submit" style={{float: 'right', color: this.state.color}} className="glyphicon glyphicon-trash btn btn-default" onClick={this.openModal}> </button>
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
              <button type="submit" className="btn btn-danger" onClick={this.closeModal}>No</button>
              <button type="submit" className="btn btn-success" onClick={handleDeleteMenu}>Yes</button>
            : null}
            {/timeFood/.test(this.props.route) ?
              <button type="submit" className="btn btn-danger" onClick={this.closeModal}>No</button>
              <button type="submit" className="btn btn-success" onClick={handleDeleteTimeFood}>Yes</button>
            : null}
            {/food/.test(this.props.route) ?
              <button type="submit" className="btn btn-danger" onClick={this.closeModal}>No</button>
              <button type="submit" className="btn btn-success" onClick={handleDeleteFood}>Yes</button>
            : null }
          </span>
        </div>
        </Modal>
      </span>
    );
  }
}

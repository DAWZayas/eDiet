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
    let calorie;

    const handleUpdateMenu = (e) => {
      e.preventDefault();
      const name = newNameMenu.value;
      this.props.update({oldname:this.props.menu, name});
      this.closeModal();
    };

    const handleUpdateTimeFood = (e) => {
      e.preventDefault();
      const name = newNameMenu.value;
      this.props.update({name: this.props.menu, oldTimeFood:this.props.timeFood, timeFood: name});
      this.closeModal();
    };

    const handleUpdateFood = (e) => {
      e.preventDefault();
      const food = newNameMenu.value;
      const calories = calorie.value;
      console.log(food, calories)
      this.props.update({nameMenu:this.props.menu, nameTimeFood: this.props.timeFood, oldFood: this.props.food, food, calories});
      this.closeModal();
    };

    return (
      <span>
        <button type="submit" style={{float: 'right'}} className="btn btn-default " onClick={this.openModal}> Update menu</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <div className="container">
          <a className="glyphicon glyphicon-remove pull-right" role="button" onClick={this.closeModal} />
          <h4> Update </h4>
              <span>
                {/Menu/.test(this.props.route) ?
                  <span className="input-group-btn">
                      <input className="input-group-addon"
                        type="text"
                        className="form-control"
                        id="newName"
                        placeholder="Enter your new menu Name..."
                        ref={(i) => { newNameMenu = i; }}
                      />
                      <button type="submit" className="btn btn-default " onClick={handleUpdateMenu}>yes</button>
                  </span> : null}
                {/timeFood/.test(this.props.route) ?
                  <span className="input-group-btn">
                    <input className="input-group-addon"
                      type="text"
                      className="form-control"
                      id="newName"
                      placeholder="Enter your new menu Name..."
                      ref={(i) => { newNameMenu = i; }}
                    />
                    <button type="submit" className="btn btn-default " onClick={handleUpdateTimeFood}>yes</button>
                  </span> : null}
                {/food/.test(this.props.route) ?
                  <span className="input-group-btn">
                    <input className="input-group-addon"
                      type="text"
                      className="form-control"
                      id="newName"
                      placeholder="Enter your new menu Name..."
                      ref={(i) => { newNameMenu = i; }}
                    />
                    <input className="input-group-addon"
                      type="text"
                      className="form-control"
                      id="newName"
                      placeholder="Enter your new menu Name..."
                      ref={(i) => { calorie = i; }}
                    />
                    <button type="submit" className="btn btn-default " onClick={handleUpdateFood}>yes</button>
                  </span>: null }
              </span>
        </div>
        </Modal>
      </span>
    );
  }
}

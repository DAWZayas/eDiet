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


export default class Appu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false, color: null };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount(){
    /Menu/.test(this.props.route) ? this.setState({color : 'rgb(57, 144, 128)'}) : null;
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
    let calorie;
    let menuLevel;

    const handleUpdateMenu = (e) => {
      e.preventDefault();
      const name = newNameMenu.value;
      const level = menuLevel.value;
      this.props.update({oldname:this.props.menu, name, level});
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
      this.props.update({nameMenu:this.props.menu, nameTimeFood: this.props.timeFood, oldFood: this.props.food, food, calories});
      this.closeModal();
    };

    return (
      <span>
        <button type="submit" style={{float: 'right', color: this.state.color}} className=" glyphicon glyphicon-edit btn btn-default "  onClick={this.openModal}> </button>
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
                <span>
                    <input
                      type="text"
                      className="form-control"
                      id="newName"
                      placeholder="Enter your new menu Name..."
                      ref={(i) => { newNameMenu = i; }}
                    />
                    <br/>
                    <span className="input-group">
                      <input className="input-group-addon"
                        type="text"
                        className="form-control"
                        id="newName"
                        placeholder="level menu..."
                        ref={(i) => { menuLevel = i; }}
                      />
                    <button type="submit" className="btn btn-success " onClick={handleUpdateMenu}>Yes</button>
                    </span>
                  </span> : null}
                {/timeFood/.test(this.props.route) ?
                  <span className="input-group">
                    <input className="input-group-addon"
                      type="text"
                      className="form-control"
                      id="newName"
                      placeholder="Enter your new menu Name..."
                      ref={(i) => { newNameMenu = i; }}
                    />
                    <button type="submit" className="btn btn-success " onClick={handleUpdateTimeFood}>Yes</button>
                  </span> : null}
                {/food/.test(this.props.route) ?
                  <span>
                    <input className="input-group"
                      type="text"
                      className="form-control"
                      id="newName"
                      placeholder="Enter your new menu Name..."
                      ref={(i) => { newNameMenu = i; }}
                    />
                    <br/>
                    <span className="input-group">
                    <input className="input-group-addon"
                      type="text"
                      className="form-control"
                      id="newName"
                      placeholder="Enter your new menu Name..."
                      ref={(i) => { calorie = i; }}
                    />
                    <button type="submit" className="btn btn-success " onClick={handleUpdateFood}>Yes</button>
                  </span>
                  </span>: null }
              </span>
        </div>
        </Modal>
      </span>
    );
  }
}

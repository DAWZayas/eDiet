import React from 'react';
import {Link} from 'react-router';
import ChangePassword from './updatePassword';
import ChangeMail from './updateMail';
import ChangeHeight from './updateHeight';
import DeleteUser from './deleteUser';

const style = require('./style.scss');

export default class InputUpdate extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="container">
        <div className="panel panel-default" style={{padding: '3%'}}>
          <ChangePassword user={this.props.user}/>
          <ChangeMail user={this.props.user}/>
          <ChangeHeight user={this.props.user}/>
          <DeleteUser user={this.props.user}/>
        </div>
      </div>

    );
  }
}

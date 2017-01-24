import React from 'react';

import ChangePassword from './updatePassword';
import ChangeMail from './updateMail';
import ChangeHeight from './updateHeight';

export default class InputUpdate extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="container">
        <ChangePassword id={this.props.id}/>
        <ChangeMail id={this.props.id}/>
        <ChangeHeight id={this.props.id}/>
      </div>

    );
  }
}

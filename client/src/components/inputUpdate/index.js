import React from 'react';
import {Link} from 'react-router';
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
        <Link to='/user'><button className="btn btn-default">Go back</button></Link>
      </div>

    );
  }
}

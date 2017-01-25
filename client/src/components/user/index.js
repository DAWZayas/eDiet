import React from 'react';
import {Link} from 'react-router';

import ButtonsUser from './buttonsUser';
import PanelUser from './panelUser';
const styles = require('./style.scss');

export default class ButttonsUser extends React.Component {

  constructor(props){
    super(props);
  }
  render(){
    const {user} = this.props;
    return (
      <span>
        <ButtonsUser user={user}/>
        <PanelUser user={user}/>
      </span>
    );
  }
}

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
      <div className={`container ${styles.container}`}>
        <ButtonsUser user={user}/>
        <PanelUser user={user}/>
      </div>
    );
  }
}

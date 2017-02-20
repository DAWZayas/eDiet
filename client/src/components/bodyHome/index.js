import React, {Component}from 'react';
import MainText from './mainText';
import Exercise from './exercises';
import Diets from './diets';
import ChangeLogo from './changeLogo';
import {connect} from 'react-redux';

const styles = require('./style.scss');

const mapStateToProps = state => ({
  user: state.auth.user,
});

class BodyHome extends Component {
  constructor(prop){
    super(prop);
  }

  render() {
    return (
      <div className={`${styles.container}`}>
        <MainText {...this.props} />
        <Exercise {...this.props} />
        <Diets {...this.props} />
        {this.props.user ?
          this.props.user.role ?
            <ChangeLogo name='logo' route='company'/>
          : null
        : null}
      </div>
    );
  }
}

export default connect (mapStateToProps, null)(BodyHome);

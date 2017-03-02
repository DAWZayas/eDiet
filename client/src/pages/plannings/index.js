import React, {Component} from 'react';
import dataArray from './dataArray';
import {connect} from 'react-redux';
import Planning from '../../components/plannings';
import {getImagesAction} from '../../store/actions';

import {updateMenuLevelAction} from '../../store/actions';

const styles = require('./styles.scss');

const mapStateToProps = (state) => ({
   userAuth: state.auth.user,
   status: state.uploads.status,
   images: state.uploads.images,
 });

const mapDispatchToProps = (dispatch) => ({
  updateMenus: payload => dispatch(updateMenuLevelAction(payload)),
  getImages: payload => dispatch(getImagesAction(payload)),
});

class Plannigns extends Component {
  componentWillMount() {
    this.props.getImages({folder: 'slider'});
  }

  render() {
    const {status, images, userAuth, updateMenus} = this.props;

    console.log('>>ima', images)

    console.log('PROPS', this.props);
    return (
      <div className={`container ${styles.panels}`}>
        <h1 className={`${styles.title}`}>Lost weight and keep in shape with our plans</h1>
          {status === 'done' ?
            dataArray.map((obj, index) =>
              images.map((image,index) =>
                <Planning
                  userAuth={userAuth}
                  updateMenus={updateMenus}
                  image={image}
                  key={index}
                  level={obj.level}
                  name={obj.name}
                />
              )
            )
          : null}
      </div>
    );
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Plannigns);

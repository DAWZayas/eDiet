import React from 'react';
import dataArray from './dataArray';
import {connect} from 'react-redux';
import Planning from '../../components/plannings';
import {updateMenuLevelAction} from '../../store/actions';

const styles = require('./styles.scss');

const mapStateToProps = (state) => ({
   userAuth: state.auth.user,
 });

const mapDispatchToProps = (dispatch) => ({
  updateMenus: payload => dispatch(updateMenuLevelAction(payload)),
});

const Plannigns =({updateMenus, userAuth}) =>{
  return(
    <div className={`container ${styles.panels}`}>
      <h1 className={`${styles.title}`}>Lost weight and keep in shape with our plans</h1>
      {
        dataArray.map((obj, index) =>
            <Planning
              userAuth={userAuth}
              updateMenus={updateMenus}
              image={obj.image}
              key={index}
              level={obj.level}
              name={obj.name}
            />
        )
      }
    </div>
  );
}

export default connect (mapStateToProps, mapDispatchToProps)(Plannigns);

import React from 'react';
import {Link} from 'react-router';

const styles = require('./style.scss');
const style = {
  border: 'none',
  backgroundColor: 'rgb(255,255,255)',
};

export default class ButttonsUser extends React.Component {

  constructor(props){
    super(props);
  }
  render(){
    const {user} = this.props;
    return (
    <span>
     {user ? !user.role ?
        <div className={`panel-footer ${styles.footer}`} style={style}>
        {user.menusExercises ?
          user.menusExercises.exercises.length !== 0 &&  user.menusExercises.menus.length !== 0 ?
            <div className={`${styles.dietButtons}`}>
              <Link to={`/user/myPlan/menu`}>
                <button className="btn">Today menu</button>
              </Link>
              <Link to={`/user/myPlan/exercise`}>
                <button className="btn">Today exercises</button>
              </Link>
            </div>
          : <p>Follow a diet to see your exercises and menus</p>
        : null}
      </div>
     : null :null}
    </span>
    );
  }
}

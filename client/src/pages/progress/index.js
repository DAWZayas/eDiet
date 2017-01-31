import React from 'react';
import images from '../../../images/progressMenu';
import MenuExercise from '../../components/progress';

const Progress =() =>{
    return(
      <span>
        {images.map( obj => <MenuExercise image={obj.image} name={obj.name} level={obj.level} /> )}
      </span>
    );
}

export default Progress;

import React from 'react';
import dataArray from './dataArray';
import Planning from '../../components/plannings';

const Plannigns =() =>{
  return(
    <div className="container">
      {
        dataArray.map((obj, index) =>
          <Planning
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

export default Plannigns;

import React, {Component} from 'react';

export const drawTable = table =>
  table.map((obj,index) =>
    <div key = {index}>
      <p>
        Name: {obj.name}
      </p>
    </div>
)

import React, {Component}from 'react';

export const drawMenu = (menus) => menus.map( (obj,index) =>
  <div key={index}>
    <p> name:   {obj.name}    </p>{drawTimeFoods(obj)}
  </div> );

export const drawTimeFoods = (obj) => obj.timeFoods.map((object, index) =>
  <div key={index}>
    <p> timeFood:   {object.timeFood} </p> {drawFood(object)}
  </div>);

export const drawFood = (obj ) => obj.foods.map( (object, index) =>
  <p key={index}> food:   {object.nameFood}  calories:   {object.calories} </p> );

  export const drawPageTimeFood = (menus) => menus.map( (obj,index) =>
    <div key={index}>
      <p> {obj.name}  {obj.timeFood} </p>
    </div> );

  export const drawPageFood = (Foods) => Foods.map( (obj, index ) =>
  <div key={index}>
    <p> {obj.nameFood} {obj.calories}   </p>
  </div> );

  export const drawAllFoods = (Foods) => Foods.map( (obj, index) =>
  <div key={index}>
    <p> {obj.name} {obj.timeFood}   </p> {drawFood(obj)}
  </div>
  )

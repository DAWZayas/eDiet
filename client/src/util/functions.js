import React, {Component}from 'react';

export const drawMenu = (menus) => menus.map( (obj,index) =>
  <div key={index}>
    <p> Menu:   {obj.name}   {drawTimeFoods(obj)} </p>
  </div> );

export const drawTimeFoods = (obj) => obj.timeFoods.map((object, index) =>

    <span key={index}> <br/> &emsp; Time Food:   {object.timeFood}  {drawFood(object)} </span>
  );

export const drawFood = (obj ) => obj.foods.map( (object, index) =>
  <span key={index}>  <br/> &emsp; &emsp; Food:   {object.nameFood}  Calories:   {object.calories} </span> );

  export const drawPageTimeFood = (menus) => menus.map( (obj,index) =>
    <div key={index}>
      <p>Menu:  {obj.name} <br/> &emsp; Time Food: {obj.timeFood} </p>
    </div> );

  export const drawPageFood = (Foods) => Foods.map( (obj, index ) =>
  <div key={index}>
    <p> Food: {obj.nameFood}  Calories: {obj.calories}   </p>
  </div> );

  export const drawAllFoods = (Foods) => Foods.map( (obj, index) =>
  <div key={index}>
    <p> Menu: {obj.name} <br/> &emsp; Time Food: {obj.timeFood} {drawFood(obj)}  </p>
  </div>
  )

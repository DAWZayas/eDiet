import React, {Component} from 'react';

export const drawTable = table =>
table.map((obj,index) =>
    <div key = {index}>
      <p>
        {obj.name}
      </p>
    </div>
  );

export const drawTableInfo = table =>
  table.map((obj,index) =>
    <div key = {index}>
      <p>
        Nombre: {obj.name}
      </p>
      <p>
        Nivel: {obj.level}
      </p>
      <p>
        Ejercicios:
      </p>
      {drawExercises(obj.exercises)}
    </div>
  );

export const drawExercises = exercises =>
  exercises.map((obj,index) =>
    <ul key = {index}>
      <li>
        {obj.name}
      </li>
    </ul>
  );

export const drawExercise = exercise =>
  <div>
    <p>
      Nombre: {exercise.name}
    </p>
    <ul>
      <li>
        Calorias: {exercise.calories}
      </li>
      <li>
        Tipo: {exercise.type}
      </li>
      <li>
        Tiempo: {exercise.time}
      </li>
    </ul>
  </div>
;

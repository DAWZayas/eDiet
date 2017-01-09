import React, {Component} from 'react';

// TABLES
export const drawTable = table =>
table.map((obj,index) =>
    <div key = {index}>
      <ul>
        <li>
          {obj.name}
        </li>
      </ul>
    </div>
  );

export const drawTableInfo = table =>
  table.map((obj,index) =>
    <div key = {index}>
      <p>
        Nombre: {obj.name}
      </p>
      <ul>
        <li>
          Nivel: {obj.level}
        </li>
        <li>
          Ejercicios: {drawExerciseName(obj.exercises)}
        </li>
      </ul>
    </div>
  );

// exercises

export const drawExercises = exercises =>
  exercises.map((obj,index) =>
    <div key = {index}>
      <p>Tabla: {obj.name}</p>
      <ul>
        {drawExerciseName(obj.exercises)}
      </ul>
    </div>
  );

export const drawExerciseName = exercises =>
  exercises.length === 0 ?
    <p>Sin ejercicios</p>
  :
    exercises.map((obj,index) =>
      <div key = {index}>
        <ul>
          <li>
            {obj.name}
          </li>
        </ul>
      </div>
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

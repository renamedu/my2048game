"use strict";

let field = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];
let moves = "";

let cell00 = document.querySelector(".cell-1");
let cell01 = document.querySelector(".cell-2");
let cell02 = document.querySelector(".cell-3");
let cell03 = document.querySelector(".cell-4");
let cell10 = document.querySelector(".cell-5");
let cell11 = document.querySelector(".cell-6");
let cell12 = document.querySelector(".cell-7");
let cell13 = document.querySelector(".cell-8");
let cell20 = document.querySelector(".cell-9");
let cell21 = document.querySelector(".cell-10");
let cell22 = document.querySelector(".cell-11");
let cell23 = document.querySelector(".cell-12");
let cell30 = document.querySelector(".cell-13");
let cell31 = document.querySelector(".cell-14");
let cell32 = document.querySelector(".cell-15");
let cell33 = document.querySelector(".cell-16");

cell00.innerHTML = field[0][0];
cell01.innerHTML = field[0][1];
cell02.innerHTML = field[0][2];
cell03.innerHTML = field[0][3];
cell10.innerHTML = field[1][0];
cell11.innerHTML = field[1][1];
cell12.innerHTML = field[1][2];
cell13.innerHTML = field[1][3];
cell20.innerHTML = field[2][0];
cell21.innerHTML = field[2][1];
cell22.innerHTML = field[2][2];
cell23.innerHTML = field[2][3];
cell30.innerHTML = field[3][0];
cell31.innerHTML = field[3][1];
cell32.innerHTML = field[3][2];
cell33.innerHTML = field[3][3];

function random() {
    var values = [cell00, cell01, cell02, cell03, cell10, cell11, cell12, cell13, cell20, cell21, cell22, cell23, cell30, cell31, cell32, cell33];
    let randomValue = values[Math.floor(Math.random() * values.length)];
    randomValue.innerHTML = 2;

    let randomValue2 = randomValue;

    do {
        randomValue2 = values[Math.floor(Math.random() * values.length)];
    } while (randomValue == randomValue2);

    randomValue2.innerHTML = 2;
    return
};
random();

field = [
    [+cell00.innerHTML, +cell01.innerHTML, +cell02.innerHTML, +cell03.innerHTML],
    [+cell10.innerHTML, +cell11.innerHTML, +cell12.innerHTML, +cell13.innerHTML],
    [+cell20.innerHTML, +cell21.innerHTML, +cell22.innerHTML, +cell23.innerHTML],
    [+cell30.innerHTML, +cell31.innerHTML, +cell32.innerHTML, +cell33.innerHTML]
];

import {solution} from './solution.js';
import {cssColors} from './cssColors.js';

let fieldBefore = [];

let button = document.getElementById("button");

function game(moves) {

    fieldBefore = JSON.stringify(field);
    
    solution(field, moves);
  
    cell00.innerHTML = field[0][0];
    cell01.innerHTML = field[0][1];
    cell02.innerHTML = field[0][2];
    cell03.innerHTML = field[0][3];
    cell10.innerHTML = field[1][0];
    cell11.innerHTML = field[1][1];
    cell12.innerHTML = field[1][2];
    cell13.innerHTML = field[1][3];
    cell20.innerHTML = field[2][0];
    cell21.innerHTML = field[2][1];
    cell22.innerHTML = field[2][2];
    cell23.innerHTML = field[2][3];
    cell30.innerHTML = field[3][0];
    cell31.innerHTML = field[3][1];
    cell32.innerHTML = field[3][2];
    cell33.innerHTML = field[3][3];
  
    if (fieldBefore != JSON.stringify(field)) {
      let allCells = [
        cell00,
        cell01,
        cell02,
        cell03,
        cell10,
        cell11,
        cell12,
        cell13,
        cell20,
        cell21,
        cell22,
        cell23,
        cell30,
        cell31,
        cell32,
        cell33,
      ];
      let zeroCells = [];
  
      for (let i = 0; i < allCells.length; i++) {
        if (allCells[i].innerHTML == 0) {
          zeroCells.push(allCells[i]);
        }
      }
  
      let randomValue = zeroCells[Math.floor(Math.random() * zeroCells.length)];
  
      let string = `.${String(randomValue.classList[0])}`;
      document.querySelector(string).innerHTML = 2;
  
      field = [
          [+cell00.innerHTML, +cell01.innerHTML, +cell02.innerHTML, +cell03.innerHTML],
          [+cell10.innerHTML, +cell11.innerHTML, +cell12.innerHTML, +cell13.innerHTML],
          [+cell20.innerHTML, +cell21.innerHTML, +cell22.innerHTML, +cell23.innerHTML],
          [+cell30.innerHTML, +cell31.innerHTML, +cell32.innerHTML, +cell33.innerHTML]
      ];
    };
    cssColors();
    return field;
};

document.onkeydown = function (e) {
    if (e.key == "ArrowUp" || e.key == "ArrowDown" || e.key == "ArrowRight" || e.key == "ArrowLeft") {
        switch (e.key) {
            case "ArrowUp":
              moves = "U";
              break;
            case "ArrowDown":
              moves = "D";
              break;
            case "ArrowRight":
              moves = "R";
              break;
            case "ArrowLeft":
              moves = "L";
              break;
          };
        game(moves);
    };
};
button.addEventListener("submit", function(event) {
    event.preventDefault();
    moves = event.submitter.value;
    game(moves);
});

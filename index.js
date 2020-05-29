"use strict";

import "./style.css";
import { SudokuSolver } from "./solver.js";

var solver = new SudokuSolver();
const btnSolve = document.getElementById("solve");
btnSolve.addEventListener("click", () => {
  solve();
});
const btnClear = document.getElementById("clear");
btnClear.addEventListener("click", () => {
  clear_input();
});

function solve() {
  var s = "";
  for (var i = 0; i < 81; ++i) {
    var y = document.getElementById("C" + i).value;
    if (y >= 1 && y <= 9) {
      s += "" + y;
    } else {
      s += ".";
    }
  }

  var time_beg = new Date().getTime();
  var x = solver.solve(s);

  var t = (new Date().getTime() - time_beg) / 1000.0;

  document.getElementById("runtime").innerHTML =
    "Solved puzzle in " + t + " seconds ( " + t * 1000.0 + " ms ).";
  s = "";

  for (var z = 0; z < 81; ++z) {
    document.getElementById("C" + z).value = x[z];
  }
}

function set_9x9(str) {
  if (str != null && str.length >= 81) {
    for (var i = 0; i < 81; ++i) {
      document.getElementById("C" + i).value = "";
    }
    for (var j = 0; j < 81; ++j) {
      if (str.substr(j, 1) >= 1 && str.substr(j, 1) <= 9) {
        document.getElementById("C" + j).value = str.substr(j, 1);
      }
    }
  }
}

function clear_input() {
  for (var i = 0; i < 81; ++i) {
    document.getElementById("C" + i).value = "";
  }
}


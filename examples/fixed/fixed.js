'use strict';

import Universe from '../../src/universe';
import Planet from  '../../src/planet';

import displayForceVector from './../../src/planet-visual-effects/force-vector';
import displayForceValues from './../../src/planet-visual-effects/force-values';
import displayVelocityVector from './../../src/planet-visual-effects/velocity-vector';
import displayVelocityValues from './../../src/planet-visual-effects/velocity-values';
import displayDimensionalValues from './../../src/planet-visual-effects/dimensional-values';
import displayPosition from './../../src/planet-visual-effects/position-values';

import canvasDrawer from './../../src/draw/draw-universe';

import gravityForce from './../../src/physics-modifiers/gravity-force';
import collisionForce from './../../src/physics-modifiers/collision-force';

const effects = [
  displayPosition,
  displayForceVector,
  displayForceValues,
  displayVelocityVector,
  displayVelocityValues,
  displayDimensionalValues
];

var modifiers = [
  gravityForce,
  collisionForce
];

const canvas = document.getElementById("c");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

const context = canvas.getContext("2d");

let mouseX = 0;
let mouseY = 0;

document.onmousemove = function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
};

const universe = new Universe({
  width: c.width,
  height: c.height,
  gravity: 1.1,
  bgColor: 'white',
  planets: [
    new Planet({
      r: 40,
      m: 200,
      x: c.width * 0.1,
      y: c.height * 0.3,
      color: '#ccc'
    }),
    new Planet({
      r: 40,
      m: 200,
      x: c.width * 0.6,
      y: c.height * 0.3,
      color: '#ccc'
    }),
    new Planet({
      r: 40,
      m: 200,
      x: c.width * 0.1,
      y: c.height * 0.7,
      color: '#ccc'
    }),
    new Planet({
      r: 40,
      m: 200,
      x: c.width * 0.6,
      y: c.height * 0.7,
      color: '#ccc'
    })
  ]
});

setInterval(function () {
  universe.update(modifiers, 0.05);
  canvasDrawer(universe, effects, context);
}, 50);

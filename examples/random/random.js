'use strict';

import Universe from '../../src/universe';
import Planet from  '../../src/planet';

import {getRandomInt} from '../../src/utils';

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
  // displayPosition,
  // displayForceValues,
  // displayVelocityValues,
  // displayDimensionalValues,
  displayForceVector,
  //displayVelocityVector
];

var modifiers = [
  gravityForce,
  collisionForce
];

const canvas = document.getElementById("c");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

const context = canvas.getContext("2d");

const MAX_PLANETS = 10;
const MIN_PLANETS = 30;

const numberPlanets = getRandomInt(MIN_PLANETS, MAX_PLANETS);

let mouseX = 0;
let mouseY = 0;

document.onmousemove = function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
};

const planets = [];
for (var i = 0; i < numberPlanets; i++) {
  var planet = new Planet({
    r: getRandomInt(1, 50),
    x: getRandomInt(c.width * 0.10, c.width * 0.90),
    y: getRandomInt(c.height * 0.10, c.height * 0.90),
    color: '#f5f5f5'
  });
  planet.m = 4/3 * 3.1416 * Math.pow(planet.r, 3); // size proporcional to weight
  planets.push(planet);
}

const universe = new Universe({
  width: c.width,
  height: c.height,
  gravity: 0.4,
  bgColor: 'white',
  planets
});

setInterval(function () {
  universe.update(modifiers, 0.001);
  canvasDrawer(universe, effects, context);
}, 50);

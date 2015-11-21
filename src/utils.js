'use strict';

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function round(n){
  return Math.round(n * 100 ) / 100;
}

'use strict';

export default class Planet {

  constructor(options) {
    this.x = options.x;
    this.y = options.y;
    this.m = options.m;
    this.r = options.r;
    this.color = options.color;

    this.Vx = 0;
    this.Vy = 0;
  }

  getDistanceFromPlanet(planet) {
    const separationY = planet.y - this.y;
    const separationX = planet.x - this.x;
    return Math.sqrt(Math.pow(separationY, 2) + Math.pow(separationX, 2));
  }

  update(F, t) {
    this.Fx = F.Fx;
    this.Fy = F.Fy;

    this.Vx += this.Fx / this.m;
    this.Vy += this.Fy / this.m;

    this.x += this.Vx * t;
    this.y += this.Vy * t;
  }
}

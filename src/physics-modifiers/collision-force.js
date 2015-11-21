'use strict';

export default function (planetTarget, universe) {
  let Fx = 0, Fy = 0;
  universe.planets.forEach(function (p) {
    if (planetTarget !== p) {
      const r = planetTarget.getDistanceFromPlanet(p);
      const pen = r - (planetTarget.r + p.r);
      if (pen < 0) {
        const cos = (p.x - planetTarget.x) / r;
        const sen = (p.y - planetTarget.y) / r;
        const F = - p.m * Math.pow(Math.abs(pen),3) / 2;
        Fx += F * cos;
        Fy += F * sen;
      }
    }
  });
  return {Fx, Fy}
}

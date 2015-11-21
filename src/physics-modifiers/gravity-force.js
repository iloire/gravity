'use strict';

const getForceAccordingToNewton = (G, m1, m2, r)  => {
  return G * (m1 * m2) / Math.pow(r, 2);
}

const getBetween = (val, min, max) => {
  const v = val >= min ? val : min;
  return v <= max ? v : max;
}

export default function (planetTarget, universe) {
  let Fx = 0, Fy = 0;

  universe.planets.forEach(p => {
    if (planetTarget !== p) {
      const r = getBetween(planetTarget.getDistanceFromPlanet(p), p.r, universe.options.width / 5);
      const cos = (p.x - planetTarget.x) / r;
      const sen = (p.y - planetTarget.y) / r;
      const F = getForceAccordingToNewton(universe.options.gravity, planetTarget.m, p.m, r);
      Fx += F * cos;
      Fy += F * sen;
    }
  });

  return {Fx, Fy}
}

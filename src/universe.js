'use strict';

export default class Universe {

  constructor (options) {
    this.options = options;
    this.planets = options.planets;
  }

  update(modifiers, t) {
    this.planets.forEach(p => {
      let Fx = 0, Fy = 0;
      modifiers.forEach(m => {
        const F = m(p, this);
        Fx += F.Fx;
        Fy += F.Fy;
      });
      p.update({Fx, Fy}, t);
    });
  }
}

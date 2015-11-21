const reset = (context, options) => {
  context.fillStyle = options.bgColor;
  context.fillRect(0, 0, options.width, options.height);
}

const drawPlanet = (planet, effects, context) => {
  context.fillStyle = planet.color;
  context.beginPath();
  context.arc(Math.round(planet.x), Math.round(planet.y), planet.r, 0, 2 * Math.PI, false);
  context.fill();
  context.strokeStyle='gray'
  context.stroke();
  context.closePath();

  effects.forEach(effect => {
    effect(planet, context);
  });
}

export default function (universe, effects, context) {
  reset(context, universe.options);
  universe.planets.forEach(planet => {
    drawPlanet(planet, effects, context);
  });
}

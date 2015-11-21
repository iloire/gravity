export default function (p, context) {
  context.fillStyle = 'blue';
  context.font = 'italic 12pt Calibri';
  var text = ['Vx:', p.Vx, 'Vy:', p.Vy, p.Vy].join(' ');
  context.fillText(text, p.x + (p.r + 10), p.y - (p.r + 30));
}

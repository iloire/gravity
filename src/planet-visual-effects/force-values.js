export default function (p, context) {
  context.fillStyle = 'red';
  context.font = 'italic 12pt Calibri';
  var text = ['Fx:', p.Fx, 'Fy:', p.Fy].join(' ');
  context.fillText(text, p.x + (p.r + 10), p.y - (p.r + 50));
}

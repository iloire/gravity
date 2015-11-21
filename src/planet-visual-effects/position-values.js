export default function (p, context) {
  context.fillStyle = 'gray';
  context.font = 'italic 12pt Calibri';
  var text = ['x:', p.x, 'y:', p.y].join(' ');
  context.fillText(text, p.x + (p.r + 10), p.y - (p.r + 10));
}

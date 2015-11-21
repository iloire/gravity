const LINE_WIDTH = 2;
const COLOR = '#ccc';

export default function (p, context) {
  context.beginPath();
  context.moveTo(p.x, p.y);
  context.lineTo(p.x + p.Fx * 10, p.y + p.Fy * 10);
  context.LINE_WIDTH = 5;
  context.strokeStyle = COLOR;
  context.stroke();
}

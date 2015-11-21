const LINE_WIDTH = 1;
const COLOR = '#c2c2c2';

export default function (p, context) {
  context.beginPath();
  context.moveTo(p.x, p.y);
  context.lineTo(p.x + p.Vx * 20, p.y + p.Vy * 20);
  context.lineWidth = LINE_WIDTH;
  context.strokeStyle = COLOR;
  context.stroke();
}

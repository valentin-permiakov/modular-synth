export const calculateDegree = (e: MouseEvent) => {
  // coordiantes
  const x1 = window.innerWidth / 2;
  const y1 = window.innerHeight / 2;
  const x2 = e.clientX;
  const y2 = e.clientY;

  const deltaX = x1 - x2;
  const deltaY = y1 - y2;

  // calculating degree
  const rad = Math.atan2(deltaY, deltaX);
  const deg = rad * (180 / Math.PI);

  if (deg <= -90) {
    return 180;
  }
  if (deg <= -39 && deg >= -145) {
    return -39;
  }

  return deg;
};

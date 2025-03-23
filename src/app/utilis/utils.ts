export function getResponsiveView(): [number, number] {
  const width = window.innerWidth * 0.9;
  const height = Math.min(width / 2, 400);
  return [width, height];
}
export const conf = {
  canvas: undefined,
  ctx: undefined,
  graph: undefined,
  convasConfig: {
    size: {
      width: 600,
      height: 400,
    },
  }
};

export const math = {
  getRandomInt: (min, max) => Math.floor(Math.random() * (max - min + 1) + min),
  getDistance: (a, b) => Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)),
};

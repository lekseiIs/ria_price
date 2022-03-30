const totalDuration = 20000;
const delayBetweenPoints = totalDuration / 16;
const previousY = (ctx) => (ctx.index === 0
  ? ctx.chart.scales.y.getPixelForValue(100)
  : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y);
const animation = {
  x: {
    type: 'number',
    easing: 'linear',
    duration: delayBetweenPoints,
    from: NaN,
    delay(ctx) {
      if (ctx.type !== 'data' || ctx.xStarted) {
        return 0;
      }
      // eslint-disable-next-line no-param-reassign
      ctx.xStarted = true;
      return ctx.index * delayBetweenPoints;
    },
  },
  y: {
    type: 'number',
    easing: 'linear',
    duration: delayBetweenPoints,
    from: previousY,
    delay(ctx) {
      if (ctx.type !== 'data' || ctx.yStarted) {
        return 0;
      }
      // eslint-disable-next-line no-param-reassign
      ctx.yStarted = true;
      return ctx.index * delayBetweenPoints;
    },
  },
};

export default animation;

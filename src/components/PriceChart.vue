<template>
  <div>
    <canvas id="price-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';
import priceChartData from '@/price-data';

export default {
  name: 'PriceChart',
  props: {
    labels: {
      type: Array,
      default: () => [],
    },
    nums: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    const ctx = document.getElementById('price-chart');
    new Chart(ctx, priceChartData(this.labels, this.nums));
  },
};
</script>

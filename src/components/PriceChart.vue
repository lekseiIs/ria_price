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
  data() {
    return {
      priceChartData,
    };
  },
  mounted() {
    const ctx = document.getElementById('price-chart');
    new Chart(ctx, this.priceChartData);
  },
};
</script>

<template>
  <div>
    <canvas id="price-chart"></canvas>
     <div class="button">
      <button class="sellAuto">
        <div class="sellAutoText">
        <div class="plus">  +</div>
        <div> Продати авто </div>
        </div>
      </button>
      <button class="searchAuto">
        <div class="searchAutoText">
          <div> Пошук авто </div>
        </div>
      </button>
    </div>
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
<style lang="scss">
.button{
     // width: 292px;
     // height: 40px;
      margin-left: auto;
      margin-top: 14px;
      align-items: center;
      display: flex;
      flex-direction: column;
  }
  .button button{
    width: 292px;
    height: 40px;
    align-items: center;
  }

  .searchAuto{
      margin-top: 2%;
      background: #219BE7;
      border-radius: 3px;
      //display: flex;
      justify-content: center;
      border-radius: 3px;
    //  width: 96%;
      border: none;
      color: #FFFFFF;
      font-family: Roboto;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 40px;
  }
   .sellAuto {
      display: flex;
      justify-content: center;
      background: #89BC39;
      border-radius: 3px;
      width: 96%;
      border: none;
      }
    .sellAutoText{
      text-align: center;
      font-family: Roboto;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 21px;
      display: flex;
      align-items: center;
      color: #FFFFFF;
      .plus{
        font-size: 32px;
        font-weight: 900;
      }
  }
</style>

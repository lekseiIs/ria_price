<template>
  <div>
    <div class="searchResult">
      <div class="searchPrice">
        <div>
          <div v-if=avg class="price">{{avg.toFixed() + '$'}}
            <hr class="new4">
            <div class="searchResultText">Зараз продається {{total}} авто</div>
          </div>
          <div v-else class="no_result">
            <p class="price">Оголошень немає</p>
            <hr class="new4">
            <div class="bg_smile"></div>
            <p class="searchResultText">рідкісна позиція</p>
            <div class="bg_arrow"></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>

export default {
  name: 'SearchResult',
  props: {
    avg: Number,
    total: Number,
  },
};
</script>
<style lang="scss">
  hr.new4 {
  border: 2px solid #F0F2F9;
  width: 50%;
  margin: 9px auto;
  }
  .searchResult{
    width: 100%;
  }
  .searchPrice{
    width: 292px;
    margin: 14px auto;
    padding: 10px;
    border: 4px solid #F0F2F9;
    box-sizing: border-box;
  }
  .price {
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 42px;
    color: #89BC39;
    margin: 0;
  }
  .bg_smile {
    width: 50px;
    height: 50px;
    margin: 0 auto;
    background-image: url("../assets/smile.svg");
  }
  .bg_arrow {
    width: 23px;
    height: 28px;
    margin: 0 auto;
    background-image: url("../assets/arrow.svg");

  }
  .priceUah{
        color: #9da6aa;
        font-size: 14px;
        text-align: center;
  }
  .searchResultText{
      font-family: Roboto;
      font-style: normal;
      font-weight: 600;
      font-size: 19px;
      line-height: 23px;
      color: #99A1AC;
      text-align: center;
      margin: 7px;
    }

</style>

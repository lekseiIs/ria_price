<template>
  <div>
    <div class="searchResult">
      <div class="searchPrice">
        <!-- <div class="price">{{avg ? avg.toFixed() + '$' : 'Результату не знайдено'}}</div> -->
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

         <!-- <hr class="new4"> -->
        <!-- <div class="searchResultText">Зараз продається {{total}} авто</div> -->
      </div>
    </div>
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
    display: flex;
  }
  .searchPrice{
    min-width: 344px;
    margin: 0 auto;
    padding: 13px 0;
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
      font-size: 20px;
      line-height: 23px;
      color: #99A1AC;
      text-align: center;
      margin: 7px;
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
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      display: flex;
      align-items: center;
      color: #FFFFFF;
  }
  .button{

      margin-left: 3%;
      margin-top: 5%;
      align-items: center;
  }
  .plus{
      font-family: Roboto;
      font-style: normal;
      font-weight: 900;
      font-size: 24px;
      line-height: 42px;
      display: flex;
      align-items: center;
      color: #FFFFFF;
      font-weight: bold;
  }
  .searchAuto{
      margin-top: 2%;
      background: #219BE7;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      border-radius: 3px;
      width: 96%;
      border: none;
      color: #FFFFFF;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 42px;
  }
</style>

<template>
  <div>
    <footer class="footer">
      <div class="container">
         <!--eslint-disable-next-line-->
        <p class="seo">Онлайн калькулятор вартості авто може визначити середньоринкову вартість вашого автомобіля. Це інструмент для розрахунку середньої ціни вашого авто на авторинку, який допоможе вигідно продати та купити авто по вигідній ціні.
</p>
        <div class="footer__inner">
          <span class="footer__copy">© 2014-2022 RIA.com</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MainFooter',
};
</script>

<style scoped lang="scss">
.footer {
  &__inner{
    text-align: center;
    height: 31px;
    align-items: center;
  }
  &__copy{
    font-size: 13px;
    font-weight: 500;
    color: #023b56;
  }
.seo{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  color: #777777;
  margin: 14px 14px 14px 14px;
}
}
</style>

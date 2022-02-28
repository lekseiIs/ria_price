<template>
  <div>
    <header>
      <div class="container">
        <div class="header__inner">
          <div class="header__top">
            <img class="logo" src="../assets/logo.svg" alt="logo">
            <button class="header__button">Продати авто</button>
          </div>
          <div class="header__bottom">
          <span class="header__message">
            «Ну трошки крашена». Перевірено людьми
          </span>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'MainHeader',
};
</script>

<style scoped lang="scss">
.header {
  border-bottom: 1px solid transparent;
  margin-bottom: 30px;
  &__inner {
    display: flex;
    flex-direction: column;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }

  &__button {
    font-size: 18px;
    line-height: 40px;
    padding: 0 15px;
    background: #79be00;
    box-sizing: border-box;
    min-width: 220px;
    height: 48px;
    border-radius: 5px;
    border: none;
    color: #fff;
  }

  &__message {
    color: #256799;
    font-size: 18px;
    display: block;
  }

}
</style>

<template>
  <div id="app">
    <header>
      <div class="container-header">
        <div class="header__inner">
          <div class="header__top">
            <img class="logo" src="./assets/logo.svg" alt="logo">
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

    <SearchForm/>
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue';

export default {
  name: 'App',
  components: {
    SearchForm,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container-header {
  padding-top: 14px;
  padding-left: 10px;
  padding-right: 10px;
  width: 940px;
  margin: 0 auto;
}

.logo {
  width: 160px;
}

.header {
  border-bottom: 1px solid transparent;
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

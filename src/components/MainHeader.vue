<template>
  <div>
    <header>
      <div class="container">
        <div class="header__inner">
          <div class="header__top">
            <img class="logo" src="../assets/logo.svg" alt="logo">
          </div>
          <div class="header__bottom">
            <span class="header__message">
                Слава Україні! Окупанти – геть!
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
  width: 100%;

  &__inner {
    padding-top: 7px;
    padding-left: 11px;
    display: flex;
    flex-direction: column;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 7px;
  }

  &__message {
    color: #256799;
    font-size: 16px;
  }
}

@media (min-width: 600px) and (max-width: 1400px) {
  .header{
    &__inner{
      justify-content: center;
      align-items: center;
    }
    &__message{
      font-size: 22px;
    }
  }
  .logo {
    width: 200px;
  }
}
@media screen and  (min-width: 1400px) {
  .container {
    width: 848px;
    padding-left: 10px;
    padding-right: 10px;
    margin: 0 auto;
  }
  .header{
    margin-bottom: 30px;
    &__message{
      font-size: 22px;
    }
  }
  .logo {
    width: 272px;
  }
}

</style>

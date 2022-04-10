<template>
  <div>
    <header>
      <div class="container">
        <div class="header__inner">
          <div class="header__top">
            <div class="logo">
              <a href="https://auto.ria.com" target="_blank">
                <img  src="../assets/logo2.svg" alt="logo">
              </a>
            </div>
            <button class="btn">
              <a href="https://auto.ria.com/uk/add_auto.html" target="_blank" rel="nofollow">
              <span class="plus">+ <span class="sell"> Продати авто</span></span>
              </a>
            </button>
          </div>
          <div class="header__bottom">
             <div class="header__message">
               Слава Україні! Окупанти – геть!
            </div>
            <p class="avgPrice">Розрахуйте середню вартість авто</p>
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
    padding: 14px 14px 0px 14px;
  }
  &__top {
    justify-content: space-between;
    user-select: none;
    display: flex;
  }
  &__bottom{
    align-content: center;
  }
    &__message {
    color: #4979AA;
    font-size: 15px;
    user-select: none;
    width: 100%;
    padding: 11px 0px 14px 0px;
    font-weight: 600;
  }
}
a {
  text-decoration: none;
  color: #FFFFFF;
}

.avgPrice {
  margin-top: 0;
  margin-bottom: 14px;
  color: rgba(0, 0, 0, 0.65);
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
}
.logo{
  height: 41px;
}
.logo img{
  width: 139px;
  height: 41px;
}
.btn {
  width: 139px;
  height: 40px;
  background-color: #89BC39;
  border-radius: 3px;
  padding: 0%;
  text-decoration: none;
}
.plus{
  font-size: 32px;
  line-height: 42px;
  color: #FFFFFF;
  vertical-align: bottom;
  font-weight: bold;
}
.sell{
  font-size: 16px;
  color: #FFFFFF;
  font-weight: normal;
  vertical-align: bottom;
  }

@media screen and (max-width: 425px) {

}

@media (min-width: 768px) {
  .header{
    &__inner{
      justify-content: space-around;
      margin-left: 14px;
      margin-right: 14px;
    }
    &__message{
      font-size: 15px;
    }
  }
}

</style>

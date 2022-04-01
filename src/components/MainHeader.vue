<template>
  <div>
    <header>
      <div class="container">
        <div class="header__inner">
          <div class="header__top">
            <div class="logo">
                <img  src="../assets/logo2.svg" alt="logo">
            </div>
            <button class="btn" href="#">
              <span class="plus">+ <span class="sell">Продати авто</span></span>
            </button>
          </div>
          <div class="header__bottom">
             <div class="header__message">
               Слава Україні! Окупанти – геть!
          </div>
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
    padding-top: 16px;
    //  padding-left: 11px;
    //flex-direction: column;
  }

  &__top {
   // display: flex;
    justify-content: space-between;
    //margin-bottom: 7px;
    user-select: none;
    height: 48px;
    display: flex;
    justify-content: space-around;
  }
  &__bottom{
    align-content: center;
  }
}
.container{
    width: 80%;
    margin-left: 10%;
  }
.logo img{
      width: 163px;
      height: 48px;

      top: 16px;
    }
.header__message {
  color: #256799;
  font-size: 16px;
  user-select: none;
  width: 100%;
  padding-left: 11px;
}
.btn {
  width: 165px;
  height: 47.79px;
  background-color: #89BC39;
  border-radius: 3px;

}
.plus{
  font-size: 36px;
  line-height: 42px;
  color: #FFFFFF;
  text-align: center;
  font-weight: bold;
}
.sell{
  font-size: 18px;
  color: #FFFFFF;
  font-weight: normal;
}

/*
@media (min-width: 600px) and (max-width: 1400px) {
  .header{
    &__inner{
      justify-content: space-around;
      //align-items: center;
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
*/
</style>

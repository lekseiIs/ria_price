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
              <span class="plus">+ <span class="sell"> Продати авто</span></span>
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
}
.logo{
  height: 41px;
}
.logo img{
  width: 139px;
  height: 41px;
}
.header__message {
  color: #4979AA;
  font-size: 15px;
  user-select: none;
  width: 100%;
  padding: 11px 0px 10px 0px;
  font-weight: 600;
}
.btn {
  width: 139px;
  height: 40px;
  background-color: #89BC39;
  border-radius: 3px;
  padding: 0%;
}
.plus{
  font-size: 32px;
  line-height: 42px;
  color: #FFFFFF;
  //text-align: center;
  font-weight: bold;
}
.sell{
  font-size: 16px;
  color: #FFFFFF;
  font-weight: normal;
  vertical-align: bottom;
  top:50%;
}

@media screen and (max-width: 425px) {

}

@media (min-width: 768px) {
  .header{
    &__inner{
      justify-content: space-around;
      //align-items: center;
      //width: 70%;
      margin-left: 14px;
      margin-right: 14px;
    }
    &__message{
      font-size: 15px;
    }
  }

  // .logo img{
  //   width: 207px;
  //   height: 61px;
  // }
//   .btn {
//   width: 186.85px;
//   height: 51px;
//  }
}
/*
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

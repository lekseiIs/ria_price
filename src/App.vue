<template>
  <body id="app">
  <MainHeader/>
  <main>

    <SearchForm/>
  </main>
  <MainFooter/>
  </body>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue';
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';

export default {
  name: 'App',
  components: {
    MainHeader,
    SearchForm,
    MainFooter,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

body {
  margin: 0;
}

*, *::before, *::after {
  box-sizing: border-box;
}

@media screen and (min-width: 1400px) {
  main {
    padding-top: 50px;
  }
  .header{
    &__bottom{
     display: block;
      width: 100%;
    }
  }
}
@media screen and (max-width: 1400px) {
  main {
    padding-top: 30px;
  }
}
@media screen and (max-width: 600px) {
  main {
    padding-top: 10px;
  }
}
#app {
  font-family: Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: #000;
}
main {
  flex: 1;
}

</style>

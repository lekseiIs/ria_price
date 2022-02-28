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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: #000;
}
.container{
  padding-top: 14px;
  padding-left: 10px;
  padding-right: 10px;
  width: 940px;
  margin: 0 auto;
}

.logo {
  display: inline-block;
  width: 160px;
}
main{
  flex: 1;
}

</style>

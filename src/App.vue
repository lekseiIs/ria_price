<template>
  <body id="app">
    <MainHeader />
    <main>

      <SearchForm />
      <SearchResult
        v-if="getStatus"
        :avg="getAvgResult.apiRequest.interQuartileMean"
        :total="getAvgResult.apiRequest.total"
      />
      <LoadingSpinner v-show="getLoaded" />
      <PriceChart
        v-if="getStatus"
        :labels="getAvgResult.dbRequest.labels"
        :nums="getAvgResult.dbRequest.nums"
      />
    </main>
    <MainFooter />
  </body>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue';
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    MainHeader,
    SearchForm,
    MainFooter,
    SearchResult: () => import('@/components/SearchResult.vue'),
    PriceChart: () => import('@/components/PriceChart.vue'),
    LoadingSpinner: () => import('@/components/LoadingSpinner.vue'),
  },
  computed: {
    ...mapGetters({
      getStatus: 'getStatus',
      getAvgResult: 'getAvgResult',
      getLoaded: 'getLoaded',
    }),
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

body {
  margin: 0;
}
*,
*::before,
*::after {
  box-sizing: border-box;
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

@media (min-width: 767px) {
  #app{
    margin-left: auto;
    margin-right: auto;
    width: 640px;
  }
}
</style>

<template>
<div>
    <div v-if="getArr.length">
        <div class="line"></div>
        <p class="title">Переглянуті авто</p>
        <AutoItem v-for="el in getArr" :key="el.autoId" :dataAuto=el />
    </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AutoItem from '@/components/History/AutoItem.vue';

export default {
  name: 'HistoryElem',
  data() {
    return {
    };
  },
  props: [
    'onClick',
  ],
  components: {
    AutoItem,
  },
  created() {
    this.setToLocalStorage();
  },
  beforeUnmount() {
  },
  methods: {
    ...mapActions({
      setToLocalStorage: 'setToLocalStorage',
    }),
  },
  computed: {
    ...mapGetters({
      getArr: 'getHistoryById',
    }),
  },
};
</script>

<style scoped>
    @import './HistoryElem.scss';
</style>

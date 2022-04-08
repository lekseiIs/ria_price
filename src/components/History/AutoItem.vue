<template>
<a class="item_auto" @click="fillForm" v-on:keyup.enter="fillForm">
    <img :src="link" alt="" width="100px">
    <div>
        <span>{{dataAuto.markName}} </span>
        <span>{{dataAuto.modelName}}</span>
    </div>
</a>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AutoItem',
  data() {
    return {
      result: {},
    };
  },
  props: [
    'dataAuto',
  ],
  computed: {
    link() {
      return this.dataAuto.photo;
    },
  },
  components: {
  },
  created() {
    this.result = this.dataAuto;
  },
  beforeUnmount() {
  },
  methods: {
    fillForm() {
      this.changeFormState(this.result);
    },
    ...mapActions({
      changeFormState: 'changeFormState',
    }),
  },
};
</script>

<style scoped>
    @import './AutoItem.scss';
</style>

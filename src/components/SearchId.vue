<template>
  <div class="search-id wrapper">
    <label for="search-id">
      <input
        name="search-id"
        id="search-id"
        type="number"
        v-model="input"
        @focus="openResult"
        @blur="closeResult"
      />
    </label>
    <transition name="fade">
      <div class="search-result" v-if="resultVisible">
        <LoadingSpinner v-if="spinner" />
        <div class="search-start" v-if="!input">
          <p class="result-title">Введіть ID оголошення</p>
        </div>
        <div class="search-success" v-else-if="success" @click="fillForm">
          <div class="result-img">
            <img :src="result.photo" :alt="result.markName" />
          </div>
          <p class="result-title">
            {{ result.markName + " " + result.modelName }}
          </p>
        </div>
        <div class="search-failed" v-else-if="nothing">
          <p class="result-title">Нічого не знайдено :(</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import debounce from 'lodash.debounce';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import { mapActions } from 'vuex';

export default {
  name: 'SearchId',
  data() {
    return {
      input: '',
      resultVisible: false,
      result: {},
      fetched: false,
      success: false,
      spinner: false,
      nothing: false,
    };
  },
  components: {
    LoadingSpinner,
  },
  created() {
    this.debouncedWatch = debounce(async (newValue) => {
      const input = newValue.replace(/[^\d]/g, '');
      this.spinner = true;
      this.nothing = false;
      this.success = false;
      await fetch(`${process.env.VUE_APP_API_URL}/ad/info?id=${input}`)
        .then((data) => data.json())
        .then((json) => {
          this.result = json.data;
          this.success = true;
        })
        .catch((error) => {
          console.log(error);
          this.success = false;
          this.result = {};
          this.nothing = true;
        })
        .finally(() => {
          this.spinner = false;
        });
    }, 1000);
  },
  beforeUnmount() {
    this.debouncedWatch.cancel();
  },
  methods: {
    openResult() {
      this.resultVisible = true;
    },
    closeResult() {
      this.resultVisible = false;
    },
    inputChange(newVal) {
      return newVal;
    },
    fillForm() {
      this.changeFormState(this.result);
    },
    ...mapActions({
      changeFormState: 'changeFormState',
    }),
  },
  watch: {
    input(...args) {
      this.debouncedWatch(...args);
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 300px;
  margin: 20px;
  position: relative;
  border: 2px solid #DB5C4C;
  border-radius: 3px;
  /* border-bottom: none; */
}
input {
  width: 100%;
  position: relative;
  border: none;
}
.search-result {
  width: 100%;
  border: 1px solid #808080;
  position: absolute;
  background-color: #fff;
  border: 2px solid #DB5C4C;
}
.search-success:hover {
  background-color: #d6d6d6;
  cursor: pointer;
}
.search-success {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
}
.search-failed {
  justify-content: space-between;
  padding: 10px;
  align-items: center;
}
.search-start {
  justify-content: space-between;
  padding: 10px;
  align-items: center;
}
.result-img {
  width: 60px;
  /* max-height: 30px; */
  /* background-color: pink; */
}
.result-img img {
  width: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>

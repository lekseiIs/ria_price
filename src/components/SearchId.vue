<template>
  <div class="search-id wrapper">
    <label for="search-id">
      <input
        placeholder="Пошук по ID"
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
          <HistoryElem />
        </div>
        <div
          class="search-success"
          v-else-if="success"
          @click="fillForm"
          v-on:keyup.enter="fillForm"
        >
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
import HistoryElem from '@/components/History/HistoryElem.vue';
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
    HistoryElem,
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
          if (json.message === 'ok') {
            this.addToLocalStorage(json.data);
            this.result = json.data;
            this.success = true;
          }
          console.log(json.data);
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
    addToLocalStorage(result) {
      if (!localStorage.getItem('serchByID')) {
        localStorage.setItem('serchByID', JSON.stringify([result]));
      } else {
        const ls = localStorage.getItem('serchByID');
        const parseDataFromLocalStorage = JSON.parse(ls);
        parseDataFromLocalStorage.unshift(result);
        if (parseDataFromLocalStorage.length >= 6) {
          parseDataFromLocalStorage.pop();
        }
        localStorage.setItem(
          'serchByID',
          JSON.stringify(parseDataFromLocalStorage),
        );
      }
    },
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
      console.log(this.result);
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
  width: 292px;
  margin: 0 auto 14px auto;
  border: 1px solid #db5c4c;
  border-radius: 3px;
  z-index: 999;

  /* border-bottom: none; */
}
input {
  width: 100%;
  height: 40px;
  border: none;
}
label {
  margin-left: 0;
}
input,
input::placeholder {
  color: rgba(219, 92, 76, 0.5);
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  font-style: normal;
}
.search-result {
  width: 292px;
  border: 1px solid #808080;
  position: absolute;
  background-color: #fff;
  border: 2px solid #db5c4c;
  z-index: 1;
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

@media (min-width: 768px) {
  .wrapper {
    margin-left: 25%;
  }
}
</style>

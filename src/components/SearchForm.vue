<template>
  <form class="form" @submit.prevent="submitForm" ref="formParams">
    <h3 class="form__title">Авто Вартість</h3>
    <label for="select_type">
      <select
        class="form__caption"
        name="select_type"
        id="select-type"
        required
      >
        <option value="1">Легкові</option>
      </select>
    </label>
    <label for="body_id">
      <select
        class="form__caption form__caption--width"
        name="body_id"
        id="select-body"
        v-model="getFormState.body_id"
      >
        <option disabled value="" selected>Тип кузова</option>
        <option
          v-for="bodyStyle in getBodyStyles"
          :key="bodyStyle.value"
          :value="bodyStyle.value"
        >
          {{ bodyStyle.name }}
        </option>
      </select>
    </label>
    <label for="marka_id">
      <select
        class="form__caption"
        name="marka_id"
        id="select-marka"
        v-model="getFormState.marka_id"
        required
      >
        <option disabled value="" selected>Марка</option>
        <option
          v-for="marka in getMarks"
          :key="marka.value"
          :value="marka.value"
        >
          {{ marka.name }}
        </option>
      </select>
    </label>
    <label for="model_id">
      <select
        class="form__caption form__caption--width"
        name="model_id"
        id="select-model"
        v-model="getFormState.model_id"
        required
      >
        <option disabled value="" selected>Модель</option>
        <option
          v-for="model in getModels.data"
          :key="model.value"
          :value="model.value"
        >
          {{ model.name }}
        </option>
      </select>
    </label>
    <label for="yers">
      <input
        class="form__caption form__caption--width"
        type="number"
        min="1930"
        :max="new Date().getFullYear()"
        name="yers"
        id="input-year"
        required
        autocomplete="off"
        placeholder="Рік"
        v-model="getFormState.yers"
      />
    </label>
    <div class="race-inputs">
      <label for="#" class="form__inner">
        <input
          name="raceInt"
          class="form__caption form__text"
          min="5"
          :max="getFormState.raceInt"
          type="number"
          placeholder="Пробіг від"
          value="5"
          required
        />
        <input
          name="raceInt"
          class="form__caption form__text"
          v-model="getFormState.raceInt"
          max="1000"
          type="number"
          placeholder="Пробіг до"
          required
        />
      </label>
    </div>
    <transition name="fade">
      <FormAdditionals v-if="addIsOpen" />
    </transition>
    <div class="btn">
      <button
        class="form__btn form__btn--transparent"
        @click="openAdditional"
        v-if="!addIsOpen"
      >
        Розширений пошук
      </button>
      <button class="form__btn form__btn--blue">Пошук</button>
    </div>
    <div></div>
  </form>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SearchForm',
  components: {
    FormAdditionals: () => import('@/components/FormAdditionals.vue'),
  },
  data() {
    return {
      raceTo: '',
      addIsOpen: false,
    };
  },
  created() {
    this.fetchBodyStyles();
    this.fetchMarks();
    this.marks = this.getMarks;
    this.checkSize();
    window.addEventListener('resize', this.checkSize);
  },
  methods: {
    ...mapActions({
      fetchMarks: 'fetchMarks',
      fetchModels: 'fetchModels',
      fetchBodyStyles: 'fetchBodyStyles',
      fetchRegions: 'fetchRegions',
      fetchGearboxes: 'fetchGearboxes',
      fetchFuelTypes: 'fetchFuelTypes',
      fetchResult: 'fetchResult',
      setIsFetched: 'setIsFetched',
      setisLoaded: 'setIsLoaded',
      changeFormState: 'changeFormState',
    }),
    checkSize() {
      this.addIsOpen = window.innerWidth > 767;
    },
    openAdditional() {
      this.addIsOpen = true;
    },
    modelsAction() {
      this.fetchModels(this.getFormState.marka_id);
    },
    submitForm() {
      // console.log(process.env.VUE_APP_API_URL);
      const params = new FormData(this.$refs.formParams);
      this.fetchResult(params)
        .then(() => {
          this.setIsFetched(false);
          this.setisLoaded(true);
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setTimeout(() => {
            this.setisLoaded(false);
            this.setIsFetched(true);
          }, 1000);
        });
    },
  },
  watch: {
    marka: 'modelsAction',
  },
  computed: {
    ...mapGetters({
      getMarks: 'getMarks',
      getModels: 'getModels',
      getBodyStyles: 'getBodyStyles',
      getRegions: 'getRegions',
      getGearboxes: 'getGearboxes',
      getFuelTypes: 'getFuelTypes',
      getAvgResult: 'getAvgResult',
      getFormState: 'getFormState',
    }),
    marka() {
      return this.getFormState.marka_id;
    },
  },
};
</script>
<style  lang="scss">
select {
  background: url(../../public/arrow.png) no-repeat;
  background-position: right 18px top 50%;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-overflow: "";
  cursor: pointer;
  position: relative;
  z-index: 0;
  padding-left: 15px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input {
  outline: inherit;
}

input,
input::placeholder {
  padding: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

button {
  background-color: transparent;
  font-size: inherit;
  font-family: inherit;
  border: none;
  cursor: pointer;
}
.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto 0;
  font-size: 14.5px;
  padding: 14px 14px 14px 14px;
  color: #fff;
  background-color: #db5c4c;

  &__title {
    display: block;
    border: 1px solid #fff;
    height: 40px;
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    border-radius: 3px;
    text-align: center;
    padding: 8px 0;
    margin-top: 0;
    margin-bottom: 12px;
  }

  &__caption {
    padding: 0px 0px 0px 15px;
    background-color: #fff;
    color: #777;
    margin-bottom: 12px;
    border: 1px solid #777;
    border-radius: 3px;
    height: 40px;
  }

  &__text {
    width: calc(50% - 7px);
    display: inline-block;
    &:not(:last-child) {
      margin-right: 13px;
    }

    &--right {
      margin-right: 13px;
    }
  }

  &__btn {
    width: calc(50% - 7px);
    padding: 9px 0;
    color: #fff;
    border-radius: 3px;

    &:not(:last-child) {
      margin-right: 13px;
    }

    &--blue {
      border: 1px solid transparent;
      background-color: #219be7;
    }

    &--transparent {
      border: 1px solid #fff;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.form__caption--width,
select {
  width: 100%;
}

@media (min-width: 768px) {
.form {
    display: inline-block;
    column-count: 2;
    padding-bottom: 2px;
    border-radius: 0 0 0 12px;
  &__btn {
      font-size: 14.5px;
      width: 100%;
    }
  }
  .first label {
    width: 100px;
  }
}
</style>

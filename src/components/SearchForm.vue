<template>
  <form
    class="form"
    @submit.prevent="submitForm"
  >
    <h3 class="form__title">Авто Вартість</h3>
    <label for="select-type">
      <select
        class="form__caption"
        name="select-type"
        id="select-type"
        required
      >
        <option value="1">Легкові</option>
      </select>
    </label>
    <label for="select-body">
      <select
        class="form__caption form__caption--width"
        name="select-body"
        id="select-body"
        v-model="bodyStyle"
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
    <label for="select-marka">
      <select
        class="form__caption"
        @change="modelsAction"
        v-model="marka"
        name="select-marka"
        id="select-marka"
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
    <label for="select-model">
      <select
        class="form__caption form__caption--width"
        name="select-model"
        id="select-model"
        v-model="model"
        required
      >
        <option disabled value="" selected>Модель</option>
        <option
          v-for="model in getModels"
          :key="model.value"
          :value="model.value"
        >
          {{ model.name }}
        </option>
      </select>
    </label>
    <label for="input-year">
      <input
        class="form__caption form__caption--width"
        v-model="year"
        type="number"
        :max="new Date().getFullYear()"
        name="input-year"
        id="input-year"
        required
        autocomplete="off"
        placeholder="Рік"
      />
    </label>
    <div class="race-inputs">
      <label for="#" class="form__inner">
        <input
          class="form__caption form__text"
          v-model="raceFrom"
          min="5"
          :max="raceTo"
          type="number"
          placeholder="Пробіг від"
          required
        />
        <input
          class="form__caption form__text"
          v-model="raceTo"
          max="999"
          type="number"
          placeholder="Пробіг до"
          required
        />
      </label>
    </div>
    <div class="additionally" v-if="addIsOpen">
      <label for="select-region">
        <select
          class="form__caption"
          name="select-region"
          id="select-region"
          v-model="additional.region"
        >
          <option disabled value="" selected>Регіон</option>
          <option
            v-for="region in getRegions"
            :key="region.value"
            :value="'state_id=' + region.value"
          >
            {{ region.name }}
          </option>
        </select>
      </label>
      <label for="select-damage">
        <select
          class="form__caption form__text form__text--right"
          name="select-damage"
          id="select-damage"
          v-model="additional.damage"
        >
          <option disabled value="" selected>ДТП</option>
          <option value="damage=0">Не було</option>
          <option value="damage=1">Було</option>
        </select>
      </label>
      <label for="select-custom">
        <select
          class="form__caption form__text"
          name="select-custom"
          id="select-custom"
          v-model="additional.custom"
        >
          <option disabled value="" selected>Документи</option>
          <option value="custom=0" selected>Розмитнена</option>
          <option value="custom=1">Нерозмитнена</option>
        </select>
      </label>
      <label for="select-gearbox">
        <select
          class="form__caption"
          name="select-gearbox"
          id="select-gearbox"
          v-model="additional.gearbox"
        >
          <option disabled value="" selected>КПП</option>
          <option
            v-for="gearbox in getGearboxes"
            :key="gearbox.value"
            :value="'gear_id=' + gearbox.value"
          >
            {{ gearbox.name }}
          </option>
        </select>
      </label>
      <label for="select-fuel">
        <select
          class="form__caption"
          name="select-fuel"
          id="select-fuel"
          v-model="additional.fuelType"
        >
          <option disabled value="" selected>Паливо</option>
          <option
            v-for="fuelType in getFuelTypes"
            :key="fuelType.value"
            :value="'fuel_id=' + fuelType.value"
          >
            {{ fuelType.name }}
          </option>
        </select>
      </label>
    </div>
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
  </form>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SearchForm',
  data() {
    return {
      bodyStyle: '',
      marks: [],
      marka: '',
      models: [],
      model: '',
      year: '',
      raceFrom: '',
      raceTo: '',
      additional: {
        region: '',
        damage: '',
        custom: '',
        gearbox: '',
        fuelType: '',
      },
      addIsOpen: false,
    };
  },
  created() {
    this.fetchBodyStyles();
    this.fetchRegions();
    this.fetchMarks();
    this.fetchGearboxes();
    this.fetchFuelTypes();
    this.marks = this.getMarks;
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
    }),
    openAdditional() {
      this.addIsOpen = true;
    },
    modelsAction() {
      this.fetchModels(this.marka);
    },
    submitForm() {
      const url = `https://developers.ria.com/auto/average_price?api_key=U7i4BeQMgsVW0z4r9OxQvHc4H7C1IecipE3kX5zu&body_id=${this.bodyStyle}&marka_id=${this.marka}&model_id=${this.model}&yers=${this.year}&raceFrom=${this.raceFrom}&raceTo=${this.raceTo}&`;
      const params = Object.values(this.$data.additional).filter(
        (e) => typeof e === 'string' && e.length,
      );
      this.fetchResult(url + params.join('&')).then((data) => console.log(data)).finally(() => this.setIsFetched(true));
    },
  },
  filters: {
    yearFilter(value) {
      return `yers=${value}`;
    },
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
    }),
  },
};
</script>
<style scoped lang="scss">
select {
  background: url(../../public/arrow.png) 95% 50% no-repeat;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 13px;
  text-overflow: "";
  cursor: pointer;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input {
  outline: inherit;
  border: none;
}

input,
input::placeholder {
  padding: 13px;
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
  margin: 0 auto 10px;
  font-size: 13px;
  padding: 15px;
  color: #fff;
  background-color: #db5c4c;

  &__title {
    display: block;
    border: 1px solid #fff;
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    border-radius: 3px;
    text-align: center;
    padding: 15px 0;
  }

  &__caption {
    font-size: 13px;
    padding: 13px 10px;
    background-color: #fff;
    color: #777;
    margin-bottom: 12px;
    border: 1px solid #777;
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

.form__caption--width,
select {
  width: 100%;
}

@media screen and (min-width: 390px) {
  .form {
    &__btn {
      font-size: 17px;
    }
    &__caption {
      font-size: 17px;
    }
  }
}
</style>

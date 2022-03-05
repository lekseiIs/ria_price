<template>
  <form action="#" class="search-form" @submit.prevent="fetchResult">
    <label for="select-type"
      >Транспорт
      <select name="select-type" id="select-type" required>
        <option value="1">Легкові</option>
      </select>
    </label>
    <label for="select-body"
      >Тип кузова
      <select name="select-body" id="select-body">
        <option disabled value="" selected>Оберіть</option>
        <option
          v-for="bodyStyle in getBodyStyles"
          :key="bodyStyle.value"
          :value="bodyStyle.value"
        >
          {{ bodyStyle.name }}
        </option>
      </select>
    </label>

    <label for="select-marka"
      >Марка
      <select
        @change="modelsAction"
        v-model="marka"
        name="select-marka"
        id="select-marka"
        required
      >
        <option disabled value="" selected>Оберіть</option>
        <option
          v-for="marka in getMarks"
          :key="marka.value"
          :value="marka.value"
        >
          {{ marka.name }}
        </option>
      </select>
    </label>
    <label for="select-model"
      >Модель
      <select name="select-model" id="select-model" v-model="model" required>
        <option disabled value="" selected>Оберіть</option>
        <option
          v-for="model in getModels"
          :key="model.value"
          :value="model.value"
        >
          {{ model.name }}
        </option>
      </select>
    </label>
    <label for="input-year"
      >Рік
      <input
        v-model="year"
        type="number"
        :max="new Date().getFullYear()"
        name="input-year"
        id="input-year"
        required
        autocomplete="off"
      />
    </label>
    <div class="race-inputs">
      <label for="#"
        >Пробіг (тис. км)
        <input
          v-model="raceFrom"
          min="5"
          :max="raceTo"
          type="number"
          placeholder="Від"
          required
        />
        <input v-model="raceTo" max="999" type="number" placeholder="До" required/>
      </label>
    </div>
    <button @click="openAdditional" v-if="!addIsOpen">Розширений пошук</button>
    <div class="additionally" v-if="addIsOpen">
      <label for="select-region"
        >Регіон
        <select name="select-region" id="select-region" v-model="region">
          <option disabled value="" selected>Оберіть</option>
          <option
            v-for="region in getRegions"
            :key="region.value"
            :value="region.value"
          >
            {{region.name}}
          </option>
        </select>
      </label>
      <label for="select-damage">ДТП
        <select name="select-damage" id="select-damage" v-model="damage">
          <option value="0">Не було</option>
          <option value="1">Було</option>
        </select>
      </label>
      <label for="select-custom">Розмитнена
        <select name="select-custom" id="select-custom">
          <option value="0">Розмитнена</option>
          <option value="1">Нерозмитнена</option>
        </select>
      </label>
      <label for="select-gearbox">КПП
        <select name="select-gearbox" id="select-gearbox" v-model="gearbox">
          <option disabled value="" selected>Оберіть</option>
          <option
            v-for="gearbox in getGearboxes"
            :key="gearbox.value"
            :value="gearbox.value"
          >
            {{gearbox.name}}
          </option>
        </select>
      </label>
      <label for="select-fuel">Паливо
        <select name="select-fuel" id="select-fuel" v-model="fuelType">
          <option disabled value='' selected>Оберіть</option>
          <option
            v-for="fuelType in getFuelTypes"
            :key="fuelType.value"
            :value="fuelType.value"
          >
            {{fuelType.name}}
          </option>
        </select>
      </label>
    </div>
    <button>Пошук</button>
  </form>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SearchForm',
  data() {
    return {
      marks: [],
      marka: '',
      models: [],
      model: '',
      year: '',
      raceFrom: '',
      raceTo: '',
      region: '',
      damage: '',
      custom: '',
      gearbox: '',
      fuelType: '',
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
    }),
    openAdditional() {
      this.addIsOpen = true;
    },
    modelsAction() {
      this.fetchModels(this.marka);
    },
    fetchResult() {
      console.log('1');
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
    }),
  },
};
</script>
<style scoped lang="scss">
select {
  background: url(/public/select-arrow.png) 100% 50% no-repeat;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
.search-form {
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 0 auto;
}
.search-form input,
select {
  width: 100%;
}
</style>

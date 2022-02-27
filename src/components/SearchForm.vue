<template>
  <form action="#" class="search-form" @submit.prevent="fetchResult">
    <label for="select-type">Транспорт
      <select name="select-type" id="select-type">
        <option value="1">Легкові</option>
      </select>
    </label>
    <label for="select-marka">Марка
      <select
        v-model="marka"
        @change="fetchModels"
        name="select-marka"
        id="select-marka"
      >
        <option disabled value="" selected>Оберіть</option>
        <option v-for="marka in marks" :key="marka.value" :value="marka.value">
          {{ marka.name }}
        </option>
      </select>
    </label>
    <label for="select-model">Модель
      <select name="select-model" id="select-model">
        <option disabled value="" selected>Оберіть</option>
        <option v-for="model in models" :key="model.value" :value="model.value">
          {{ model.name }}
        </option>
      </select>
    </label>
    <label for="input-year">Рік
      <input v-model="year" type="text" name="input-year" id="input-year" placeholder="">
    </label>
    <div class="race-inputs">
      <label for="#">Пробіг (тис. км)
        <input v-model="raceFrom" type="text" placeholder="Від">
        <input v-model="raceTo" type="text" placeholder="До">
      </label>
    </div>
    <button>Пошук</button>
  </form>
</template>

<script>
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
    };
  },
  mounted() {
    fetch(
      `http://api.auto.ria.com/categories/1/marks?api_key=${process.env.VUE_APP_API_KEY}`,
    )
      .then((data) => {
        const results = data.json();
        return results;
      })
      .then((data) => {
        this.marks = data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    fetchModels() {
      fetch(
        `http://api.auto.ria.com/categories/1/marks/${this.marka}/models?api_key=${process.env.VUE_APP_API_KEY}`,
      )
        .then((data) => {
          const results = data.json();
          return results;
        })
        .then((data) => {
          this.models = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetchResult() {
      console.log(`https://developers.ria.com/auto/average_price?api_key=U7i4BeQMgsVW0z4r9OxQvHc4H7C1IecipE3kX5zu&marka_id=${this.marka}&model_id=${this.model}&yers=${this.year}&damage=0`);
    },
  },
};
</script>
<style scoped>
select {
  background: url(/public/select-arrow.png) 100% 50% no-repeat;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
}
</style>

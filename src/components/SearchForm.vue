<template>
  <form action="#" class="search-form">
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
    <select name="select-model" id="select-model">
      <option disabled value="" selected>Оберіть</option>
      <option v-for="model in models" :key="model.value" :value="model.value">
        {{ model.name }}
      </option>
    </select>
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
    };
  },
  mounted() {
    fetch(
      'http://api.auto.ria.com/categories/1/marks?api_key=U7i4BeQMgsVW0z4r9OxQvHc4H7C1IecipE3kX5zu',
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
        `http://api.auto.ria.com/categories/1/marks/${this.marka}/models?api_key=U7i4BeQMgsVW0z4r9OxQvHc4H7C1IecipE3kX5zu`,
      )
        .then((data) => {
          const results = data.json();
          return results;
        })
        .then((data) => {
          this.models = data;
        })
        .then(() => {
          console.log(this.models);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
</style>

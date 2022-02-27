<template>
  <form action="#" class="search-form">
    <select v-model="option" @change="test" name="auto-type" id="auto-type">
      <option disabled value="">Выберите один из вариантов</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
  </form>
</template>

<script>
export default {
  name: 'SearchForm',
  data() {
    return {
      options: [],
      option: '',
    };
  },
  mounted() {
    fetch(
      'http://api.auto.ria.com/categories/1/marks?api_key=U7i4BeQMgsVW0z4r9OxQvHc4H7C1IecipE3kX5zu',
    )
      .then((data) => {
        const json = data.json();
        return json;
      })
      .then((data) => {
        this.options = data;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => console.log(this.options));
  },
  methods: {
    test() {
      console.log(this.option);
    },
  },
};
</script>
<style scoped>

</style>

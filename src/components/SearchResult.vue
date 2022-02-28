<template>
  <h1>{{arithmeticMean.toFixed()}}$</h1>
</template>
<script>
export default {
  name: 'SearchResult',
  props: {
    arithmeticMean: Number,
    total: Number,
  },
};
</script>

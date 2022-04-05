<template>
  <div class="additionally">
    <label for="state_id">
      <select
        class="form__caption"
        name="state_id"
        id="select-region"
      >
        <option disabled value="" selected>Регіон</option>
        <option
          v-for="region in getRegions"
          :key="region.value"
          :value="region.value"
        >
          {{ region.name }}
        </option>
      </select>
    </label>
    <label for="damage">
      <select
        class="form__caption form__text form__text--right"
        name="damage"
        id="select-damage"
      >
        <option disabled value="" selected>ДТП</option>
        <option value="0">Не було</option>
        <option value="1">Було</option>
      </select>
    </label>
    <label for="custom">
      <select
        class="form__caption form__text"
        name="custom"
        id="select-custom"
      >
        <option disabled value="" selected>Розмитнення</option>
        <option value="0">Розмитнена</option>
        <option value="1">Нерозмитнена</option>
      </select>
    </label>
    <label for="gear_id">
      <select
        class="form__caption"
        name="gear_id"
        id="select-gearbox"
      >
        <option disabled value="" selected>КПП</option>
        <option
          v-for="gearbox in getGearboxes"
          :key="gearbox.value"
          :value="gearbox.value"
        >
          {{ gearbox.name }}
        </option>
      </select>
    </label>
    <label for="fuel_id">
      <select
        class="form__caption"
        name="fuel_id"
        id="select-fuel"
      >
        <option disabled value="" selected>Паливо</option>
        <option
          v-for="fuelType in getFuelTypes"
          :key="fuelType.value"
          :value="fuelType.value"
        >
          {{ fuelType.name }}
        </option>
      </select>
    </label>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'FormAdditionals',
  data() {
    return {
      region: '',
      damage: '',
      custom: '',
      gearbox: '',
      fuelType: '',
    };
  },
  created() {
    this.fetchRegions();
    this.fetchGearboxes();
    this.fetchFuelTypes();
  },
  methods: {
    ...mapActions({
      fetchRegions: 'fetchRegions',
      fetchGearboxes: 'fetchGearboxes',
      fetchFuelTypes: 'fetchFuelTypes',
    }),
  },
  computed: {
    ...mapGetters({
      getRegions: 'getRegions',
      getGearboxes: 'getGearboxes',
      getFuelTypes: 'getFuelTypes',
    }),
  },
};
</script>

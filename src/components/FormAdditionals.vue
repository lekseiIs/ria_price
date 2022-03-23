<template>
  <div class="additionally">
    <label for="select-region">
      <select
        class="form__caption"
        name="select-region"
        id="select-region"
        v-model="region"
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
        v-model="damage"
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
        v-model="custom"
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
        v-model="gearbox"
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
        v-model="fuelType"
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

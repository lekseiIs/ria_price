import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    marks: [],
    marka: '',
    models: [],
    model: '',
    bodyStyles: [],
    year: '',
    raceFrom: '',
    raceTo: '',
    regions: [],
    gearboxes: [],
    fuelTypes: [],
    avgResult: {},
    isFetched: false,
  },
  getters: {
    getMarks(state) {
      return state.marks;
    },
    getModels(state) {
      return state.models;
    },
    getBodyStyles(state) {
      return state.bodyStyles;
    },
    getRegions(state) {
      return state.regions;
    },
    getGearboxes(state) {
      return state.gearboxes;
    },
    getFuelTypes(state) {
      return state.fuelTypes;
    },
    getAvgResult(state) {
      return state.avgResult;
    },
    getStatus(state) {
      return state.isFetched;
    },
    getState(state) {
      return state;
    },
  },
  mutations: {
    setMarks(state, payload) {
      Vue.set(state, 'marks', payload);
    },
    setModels(state, payload) {
      Vue.set(state, 'models', payload);
    },
    setBodyStyles(state, payload) {
      Vue.set(state, 'bodyStyles', payload);
    },
    setRegions(state, payload) {
      Vue.set(state, 'regions', payload);
    },
    setGearboxes(state, payload) {
      Vue.set(state, 'gearboxes', payload);
    },
    setFuelTypes(state, payload) {
      Vue.set(state, 'fuelTypes', payload);
    },
    setResult(state, payload) {
      Vue.set(state, 'avgResult', payload);
    },
    setIsFetched(state, payload) {
      Vue.set(state, 'isFetched', payload);
    },
  },
  actions: {
    fetchMarks(ctx) {
      fetch('https://api.auto.ria.com/categories/1/marks?api_key=U7i4BeQMgsVW0z4r9OxQvHc4H7C1IecipE3kX5zu&langId=4')
        .then((data) => {
          const marks = data.json();
          return marks;
        })
        .then((marks) => {
          ctx.commit('setMarks', marks);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetchModels(ctx, marka) {
      fetch(`https://api.auto.ria.com/categories/1/marks/${marka}/models?api_key=U7i4BeQMgsVW0z4r9OxQvHc4H7C1IecipE3kX5zu&langId=4`)
        .then((data) => {
          const models = data.json();
          return models;
        })
        .then((models) => {
          ctx.commit('setModels', models);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetchBodyStyles(ctx) {
      fetch('https://developers.ria.com/auto/categories/1/bodystyles?api_key=U7i4BeQMgsVW0z4r9OxQvHc4H7C1IecipE3kX5zu&langId=4')
        .then((data) => {
          const bodyStyles = data.json();
          return bodyStyles;
        })
        .then((bodyStyles) => {
          ctx.commit('setBodyStyles', bodyStyles);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetchRegions(ctx) {
      fetch('https://developers.ria.com/auto/states?api_key=U7i4BeQMgsVW0z4r9OxQvHc4H7C1IecipE3kX5zu&langId=4')
        .then((data) => {
          const regions = data.json();
          return regions;
        })
        .then((regions) => {
          ctx.commit('setRegions', regions);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetchGearboxes(ctx) {
      fetch('https://developers.ria.com/auto/categories/1/gearboxes?api_key=U7i4BeQMgsVW0z4r9OxQvHc4H7C1IecipE3kX5zu&langId=4')
        .then((data) => {
          const gearboxes = data.json();
          return gearboxes;
        })
        .then((gearboxes) => {
          ctx.commit('setGearboxes', gearboxes);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetchFuelTypes(ctx) {
      fetch('https://developers.ria.com/auto/type?api_key=U7i4BeQMgsVW0z4r9OxQvHc4H7C1IecipE3kX5zu&langId=4')
        .then((data) => {
          const fuelTypes = data.json();
          return fuelTypes;
        })
        .then((fuelTypes) => {
          ctx.commit('setFuelTypes', fuelTypes);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetchResult(ctx, url) {
      return fetch(url).then((data) => data.json()).then((result) => {
        ctx.commit('setResult', result);
        return result;
      });
    },
    setIsFetched(ctx, status) {
      ctx.commit('setIsFetched', status);
    },
  },
});

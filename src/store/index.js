import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formState: {
      body_id: '',
      marka_id: '',
      model_id: '',
      yers: '',
      raceInt: '',
      state_id: '',
      damage: '',
      custom: '',
      gear_id: '',
      fuel_id: '',
    },
    marks: [],
    models: [],
    bodyStyles: [],
    regions: [],
    gearboxes: [],
    fuelTypes: [],
    avgResult: {},
    isFetched: false,
    isLoaded: false,
    historyById: [],
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
    getLoaded(state) {
      return state.isLoaded;
    },
    getFormState(state) {
      return state.formState;
    },
    getHistoryById(state) {
      return state.historyById;
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
    setIsLoaded(state, payload) {
      Vue.set(state, 'isLoaded', payload);
    },
    setFormState(state, payload) {
      Vue.set(state, 'formState', payload);
    },
    setHistoryById(state, payload) {
      Vue.set(state, 'historyById', payload);
    },
  },
  actions: {
    setToLocalStorage(ctx) {
      const ls = localStorage.getItem('serchByID');
      const arr = ls ? [...JSON.parse(ls)] : [];
      ctx.commit('setHistoryById', arr);
    },
    fetchMarks(ctx) {
      if (localStorage.getItem('marks')) {
        ctx.commit('setMarks', JSON.parse(localStorage.marks));
      } else {
        fetch(
          `${process.env.VUE_APP_API_URL}/get-marks`,
        )
          .then((data) => {
            const marks = data.json();
            return marks;
          })
          .then((marks) => {
            localStorage.setItem('marks', JSON.stringify(marks.data));
            ctx.commit('setMarks', marks.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    fetchModels(ctx, marka) {
      fetch(`${process.env.VUE_APP_API_URL}/get-models/${marka}`)
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
      if (localStorage.getItem('bodyStyles')) {
        ctx.commit('setBodyStyles', JSON.parse(localStorage.bodyStyles));
      } else {
        fetch(
          `${process.env.VUE_APP_API_URL}/get-body-type`,
        )
          .then((data) => {
            const bodyStyles = data.json();
            return bodyStyles;
          })
          .then((bodyStyles) => {
            localStorage.setItem('bodyStyles', JSON.stringify(bodyStyles.data));
            ctx.commit('setBodyStyles', bodyStyles.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    fetchRegions(ctx) {
      if (localStorage.getItem('regions')) {
        ctx.commit('setRegions', JSON.parse(localStorage.regions));
      } else {
        fetch(
          `${process.env.VUE_APP_API_URL}/get-regions`,
        )
          .then((data) => {
            const regions = data.json();
            return regions;
          })
          .then((regions) => {
            localStorage.setItem('regions', JSON.stringify(regions.data));
            ctx.commit('setRegions', regions.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    fetchGearboxes(ctx) {
      if (localStorage.getItem('gearboxes')) {
        ctx.commit('setGearboxes', JSON.parse(localStorage.gearboxes));
      } else {
        fetch(
          `${process.env.VUE_APP_API_URL}/get-gearboxes`,
        )
          .then((data) => {
            const gearboxes = data.json();
            return gearboxes;
          })
          .then((gearboxes) => {
            localStorage.setItem('gearboxes', JSON.stringify(gearboxes.data));
            ctx.commit('setGearboxes', gearboxes.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    fetchFuelTypes(ctx) {
      if (localStorage.getItem('fuelTypes')) {
        ctx.commit('setFuelTypes', JSON.parse(localStorage.fuelTypes));
      } else {
        fetch(
          `${process.env.VUE_APP_API_URL}/get-fuel-type`,
        )
          .then((data) => {
            const fuelTypes = data.json();
            return fuelTypes;
          })
          .then((fuelTypes) => {
            localStorage.setItem('fuelTypes', JSON.stringify(fuelTypes.data));
            ctx.commit('setFuelTypes', fuelTypes.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    fetchResult(ctx, params) {
      return fetch(`${process.env.VUE_APP_API_URL}/avg-price`, { method: 'POST', body: params })
        .then((data) => data.json())
        .then((result) => {
          ctx.commit('setResult', result);
          return result;
        })
        .catch((e) => console.log(e));
    },
    setIsFetched(ctx, status) {
      ctx.commit('setIsFetched', status);
    },
    setIsLoaded(ctx, status) {
      ctx.commit('setIsLoaded', status);
    },
    changeFormState(ctx, newState) {
      ctx.commit('setFormState', newState);
    },
  },
});

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
  },
  actions: {
    fetchMarks(ctx) {
      fetch('http://api.auto.ria.com/categories/1/marks?api_key=U7i4BeQMgsVW0z4r9OxQvHc4H7C1IecipE3kX5zu')
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
      console.log(ctx);
      fetch(`http://api.auto.ria.com/categories/1/marks/${marka}/models?api_key=U7i4BeQMgsVW0z4r9OxQvHc4H7C1IecipE3kX5zu`)
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
      fetch('https://developers.ria.com/auto/categories/1/bodystyles?api_key=U7i4BeQMgsVW0z4r9OxQvHc4H7C1IecipE3kX5zu')
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
      fetch('https://developers.ria.com/auto/states?api_key=U7i4BeQMgsVW0z4r9OxQvHc4H7C1IecipE3kX5zu')
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
  },
});

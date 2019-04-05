import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    emission_by_transport: 5,
    emission_by_energy: 2,
    recycledPercentage: 67,
    average_emission_by_transport: 7,
    average_emission_by_energy: 13,
    average_recycledPercentage: 37
  },
  mutations: {
    updateAll(state, value) {
      state.emission_by_transport = value.emission_by_transport;
      state.emission_by_energy = value.emission_by_energy;
      state.recycledPercentage = value.recycledPercentage;
    }

  },
  actions: {

  }
})

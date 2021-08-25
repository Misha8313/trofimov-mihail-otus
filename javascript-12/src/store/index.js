import { createStore } from "vuex";

export default createStore({
  state: {
    results: [
      {
        operationType: "divide",
        time: "15",
        countTaskAll: 10,
        countTask: 2
      }
    ],
    seletedOperationType: 0,
    seletedTime: 0,
    seletedLevel: 0
  },

  mutations: {
    addResult(state, result) {
      state.results.push(result)
    },
    clearProducts(state) {
      state.products = []
    },
    setOperationType(state, operationType) {
      state.seletedOperationType = operationType
    },
    setSeletedTime(state, time) {
      state.seletedTime = time
    },
    setSeletedLevel(state, level) {
      state.seletedLevel = level
    }
  },
  getters: {
    results: state => {
      return state.results
    },
    seletedOperationType: state => {
      return state.seletedOperationType
    },
    seletedTime: state => {
      return state.seletedTime
    },
    seletedLevel: state => {
      return state.seletedLevel
    }
  }
});
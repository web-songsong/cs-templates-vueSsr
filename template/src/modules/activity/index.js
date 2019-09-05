import { ACTIVITY_TEST } from './mutation_types'
import { activity_test } from 'api'
const state = {
  data: null
}
const mutations = {
  ACTIVITY_TEST(state, data) {
    state.data = data
  }
}

const actions = {
  activity_test({ commit }) {
    return activity_test().then(res => {
      commit('ACTIVITY_TEST', res)
      return res
    })
  }
}

export default {
  state,
  mutations,
  actions
}

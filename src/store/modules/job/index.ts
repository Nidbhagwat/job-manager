import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import { Module } from 'vuex'
import JobState from './JobState'
import RootState from '../../RootState'

const jobModule: Module<JobState, RootState> = {
    namespaced: true,
    state: {
      preorder: {},
      order: {},
      inventory: {},
      product: {},
      cached: {}
    },
    getters,
    actions,
    mutations,
}

export default jobModule;

// TODO
// store.registerModule('job', jobModule);

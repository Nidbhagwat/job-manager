import { MutationTree } from 'vuex'
import JobState from './JobState'
import * as types from './mutation-types'

const mutations: MutationTree <JobState> = {
    [types.JOB_UPDATED_BULK] (state, payload) {
        payload.jobs.forEach((job: any) => {
            // TODO use systemJobEnumId and move this to actions
            state.cached[job.jobId] = {
                id: job.jobId,
                status: job.statusId,
                frequency: job.tempExprId
            }
        })
    },
    [types.JOB_UPDATED] (state, payload) {
        state.cached[payload.jobId] = {
            ...state.cached[payload.jobId],
            payload
        }
    },
    
}
export default mutations;
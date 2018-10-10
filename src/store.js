import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tasks: []
    },
    getters: {
        tasks(state){
            return state.tasks
        }
    },
    mutations: {
        createTask(state, task){
            state.tasks.push({
                text: task,
                isDone: false
            })
        },
        destroyTask(state, index){
            state.tasks.splice(index, 1)
        }
    },
    actions: {
        addTask({ commit }, task){
            commit('createTask', task)
        },
        deleteTask({ commit }, taskIndex){
            commit('destroyTask', taskIndex)
        }
    }
})
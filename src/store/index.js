import { createStore } from 'vuex';
import axios from 'axios';

const state = {
    todos: []
}

const mutations = {
    setTodos(state, data){
        state.todos = data
    }
}

const getters = {

}

const actions = {
    async getTodos ({ commit }) {
        let response = await axios('https://jsonplaceholder.typicode.com/todos');
        
        try {
            if (response.status === 200) {
                commit('setTodos', response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export default createStore({
    state,
    mutations,
    getters,
    actions,
});
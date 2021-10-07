import { createStore } from 'vuex';
import { USER_ID } from '../constant';
import axios from 'axios';

const state = {
    todos: []
}

const mutations = {
    setTodos(state, data){
        state.todos = data.reverse().filter((item) => item.userId === USER_ID );
    },

    addTodo(state, data){
        state.todos.unshift(data);
        console.log(state.todos);
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
    },

    async addTodo ({ commit }, todo){
        let data = {
            title: todo,
            completed: false,
            userId: USER_ID,
            id: state.todos.length + 1
        }
        console.log('data -->> ', data);
        let response = await axios.post('https://jsonplaceholder.typicode.com/todos', data);
        console.log('response -->> ', response);

        commit('addTodo', response.data);
    }
}

export default createStore({
    state,
    mutations,
    getters,
    actions,
});
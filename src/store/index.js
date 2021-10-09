import { createStore } from 'vuex';
import { USER_ID } from '../constant';
import axios from 'axios';

const state = {
    todos: [],
    showNav: 'all',
    nav: [
        { key: 'all', text: 'All'},
        { key: 'false', text: 'Active'},
        { key: 'true', text: 'Completed'},
    ]
}

const mutations = {
    setTodos(state, data){
        state.todos = data.reverse().filter((item) => item.userId === USER_ID );
    },

    addTodo(state, data){
        state.todos.unshift(data);
    },

    deleteTodo (state, todo){
        state.todos.splice(state.todos.indexOf(todo), 1);
    },

    editTodo(state, data){
        state.todos.map((item, index) => {
            if (item.id == data.id) {
                state.todos[index] = data
            }
        })
    },

    activateNav(state, key){
        state.showNav = key
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
        };

        let response = await axios.post('https://jsonplaceholder.typicode.com/todos', data);
        console.log(response);

        try {
            if (response.status === 201) {
                commit('addTodo', response.data);
            }
        } catch (error) {
            console.log(error);
        }
    },

    async editTodo ({ commit }, payload) {
        let data = {
            id: payload.todo.id,
            userId: USER_ID,
            title: payload.editText,
            completed: payload.todo.completed
        };

        let response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${payload.todo.id}`, data);
        
        try {
            if (response.status === 200) {
                commit('editTodo', response.data);
            }
        } catch (error) {
            console.log(error);
        }
    },

    async editCompleted({ commit }, payload){
        let data = {
            id: payload.todo.id,
            userId: USER_ID,
            title: payload.todo.title,
            completed: payload.done
        };

        let response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${payload.todo.id}`, data);

        try {
            if (response.status === 200) {
                commit('editTodo', response.data);
            }
        } catch (error) {
            console.log(error);
        }
    },

    async deleteTodo ({ commit }, todo) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todo.id}`);
        commit('deleteTodo', todo);
    },

    async filterTodos({ commit }, key){
        let response;

        if (key === 'all') {
            response = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
        } else {
            response = await axios.get(`https://jsonplaceholder.typicode.com/todos?completed=${key}`);
        }
        commit('setTodos', response.data);
        
    },

    async deleteAllCompleted ({ commit, state }){
        let completed = state.todos.filter(item => item.completed);
        await completed.map((item) => {
            axios.delete(`https://jsonplaceholder.typicode.com/todos/${item.id}`);
            commit('deleteTodo', item);
        });
        
    },

    activateNav({ commit }, key){
        commit('activateNav', key)
    },
}

export default createStore({
    state,
    mutations,
    getters,
    actions,
});
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
        console.log(state.todos);
        console.log(data);
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
        console.log('data -->> ', data);
        let response = await axios.post('https://jsonplaceholder.typicode.com/todos', data);
        console.log('response -->> ', response);

        commit('addTodo', response.data);
    },

    async editTodo ({ commit }, payload) {
        let data = {
            id: payload.todo.id,
            userId: USER_ID,
            title: payload.editText,
            completed: payload.todo.completed
        };

        console.log('edit data done >> ', data);
        let response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${payload.todo.id}`, data);
        console.log('response -->> ', response);
        commit('editTodo', data)
    },

    async editCompleted({ commit }, payload){
        let data = {
            id: payload.todo.id,
            userId: USER_ID,
            title: payload.todo.title,
            completed: payload.done
        };

        console.log('edit data done >> ', data);
        let response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${payload.todo.id}`, data);
        console.log('response -->> ', response);
        commit('editTodo', data)
    },

    async deleteTodo ({ commit }, todo) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todo.id}`);
        commit('deleteTodo', todo);
    }
}

export default createStore({
    state,
    mutations,
    getters,
    actions,
});
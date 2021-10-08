<template>
  <div class="todo__container">
    <div class="todo__header">
      <h1 class="todo__title">{{ title }}</h1>
      <TodoNew />
    </div>
    <div class="todo__body">
      <div v-if="isEmpty" class="todo__empty">{{ empty }}</div>
      <div class="todos">
        <TodoItem v-for="todo in todos" :key="todo.id" v-bind:todo="todo">{{ todo.title }}</TodoItem>
      </div>
      <div class="todo__footer">
        <TodoFooter />
      </div>
    </div>
  </div>
</template>

<script>
import {  mapState } from 'vuex';
import TodoNew from './TodoNew.vue';
import TodoItem from './TodoItem.vue';
import TodoFooter from './TodoFooter.vue';

export default {
  name: 'todo',
  components: {
    TodoNew,
    TodoItem,
    TodoFooter
  },
  data(){
    return {
      title: 'Todo List',
      empty: 'There is nothing to do...'
    }
  },
  computed: {
    isEmpty(){
      return this.todos.length == 0 ? true : false
    },
    ...mapState(['todos'])
  },
  mounted(){
    this.$store.dispatch("getTodos");
  }
}
</script>

<style src="../assets/css/layouts/todo.css" scoped></style>
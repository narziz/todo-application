<template>
    <div class="todo_add">
      <div class="todo_add__form">
        <input v-on:keyup.enter="addTodo(newTodo)" v-model="newTodo" class="todo__input todo__input__add" type="text" placeholder="What you have to do?">
        <button  v-on:click="addTodo(newTodo)" type="button" class="todo__button todo__button__add"><i class="fas fa-plus"></i></button>
      </div>
    </div>
</template>

<script>
export default {
    name: 'TodoNew',
    data(){
        return {
          newTodo: null
        }
    },

    methods: {
      addTodo(newTodo){
        this.$store.dispatch('addTodo', newTodo);
        this.newTodo = ''
      }
    }
}
</script>

<style src="../assets/css/layouts/todoNew.css" scoped></style>  
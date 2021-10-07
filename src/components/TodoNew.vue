<template>
    <div class="todo_add">
      <div class="todo_add__form">
        <input v-on:keyup.enter="addTodo(newTodo)" v-model="newTodo" class="todo__input todo__input__add" type="text" placeholder="What you have to do?">
        <button  v-on:click="addTodo(newTodo)" type="button" class="todo__button todo__button__add">Add</button>
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
      }
    }
}
</script>

<style scoped>
.todo_add__form{
  width: 100%;
  display: flex;
}
.todo__input{
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #cfcfcf;
}
.todo__input__add{
  border-radius: 4px 0 0 4px;
}
.todo__button{
  cursor: pointer;
  border: none;
  
}
.todo__button__add{
  width: 4rem;
  background: #155799;
  color: white;
  border-radius: 0 4px 4px 0;
}
</style>
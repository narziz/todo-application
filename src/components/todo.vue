<template>
  <div class="todo__container">
    <div class="todo__header">
      <h1 class="todo__title">{{ title }}</h1>
      <TodoNew />
    </div>
    <div class="todo__body">
      <div class="todos">
        <TodoItem />
        <!-- <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem /> -->
    </div>
    </div>
  </div>
</template>

<script>
import TodoNew from './TodoNew.vue';
import TodoItem from './TodoItem.vue';

export default {
  name: 'todo',
  components: {
    TodoNew,
    TodoItem
  },
  data(){
    return {
      title: 'Todo List'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.todo__container{
  width: 50%;
  background: white;
  /* padding: 2rem; */
  border-radius: 0.5rem;
}
.todo__header{
  padding: 2rem;
  border-bottom: 1px solid #cfcfcf;
  background: white;
  border-radius: 0.5rem 0.5rem 0 0;
}
.todo__title{
  margin-bottom: 1rem;
}
.todo__input{
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #cfcfcf;
  border-radius: 4px 0 0 4px;
}
.todo__button{
  cursor: pointer;
  border: none;
}
.todo__button__edit,
.todo__button__delete{
  background: none;
  font-size: 1rem;
  margin-inline: 5px;
}

.todo__button__add{
  width: 4rem;
  background: #155799;
  color: white;
  border-radius: 0 4px 4px 0;
}
.todo_add{
  display: flex;
}
.todos{
  max-height: 300px;
  overflow: auto;
}
.todos__item{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  border-bottom: 1px solid #cfcfcf;
}
.todos__item:last-child{
  border: none;
}

.todos__left{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

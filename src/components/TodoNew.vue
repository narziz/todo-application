<template>
    <div class="todo_add">
        <input class="todo__input todo__input__add" type="text" placeholder="What you have to do?">
        <button class="todo__button todo__button__add">Add</button>
    </div>
</template>

<script>
export default {
    name: 'TodoNew',
    data(){
        
    }
}
</script>

<style scoped>
.todo_add{
  display: flex;
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
.todo__button__add{
  width: 4rem;
  background: #155799;
  color: white;
  border-radius: 0 4px 4px 0;
}
</style>
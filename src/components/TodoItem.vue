<template>
    <div class="todos__item">
        <div class="todos__left">
            <input type="checkbox">
            <p>Some Todo</p>
        </div>
        <div class="todos__right">
            <button class="todo__button todo__button__edit"><i class="fas fa-edit"></i></button>
            <button class="todo__button todo__button__delete"><i class="fas fa-times"></i></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    setup() {
        
    },
}
</script>

<style scoped>
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
</style>
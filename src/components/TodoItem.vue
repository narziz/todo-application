<template>
    <div class="todos__item">
        <div class="todos__left">
          <div class="todos__container todos__container__checkbox">
            <button class="todo__button todo__button__check">
              <label v-bind:for="todo.id"><i v-show="isCompleted" class="fas fa-check"></i></label>
              <input 
                hidden
                v-bind:id="todo.id"
                v-bind:checked="todo.completed"
                class="todos__checkbox" type="checkbox" />
            </button>
          </div>
          <div class="todos__container todos__container__text">
            <span
                class="todos__text" 
                v-bind:class="{'todos__text__completed': isCompleted }"><slot></slot></span>
          </div>
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
    props: ['todo'],
    data() {
      return {
        isCompleted: this.todo.completed
      }  
    },
}
</script>

<style scoped>
.todos__item{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid #cfcfcf;
}
.todos__item:last-child{
  border: none;
}

.todos__left{
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 30rem;
}

.todo__button{
  cursor: pointer;
  border: none;
}
.todo__button__edit,
.todo__button__delete{
  color: #114b81;
  background: none;
  font-size: 1rem;
  margin-inline: 5px;
}

.todo__button__check{
  background: none;
  color: #159858;
  width: 2rem;
  height: 2rem;
  padding: 0;
  border-radius: 50%;
  margin-right: 0.5rem;
  border: 1px solid #159858;
}
.todo__button__check label {
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.todo__button__check label i{
  pointer-events: none;
}
.todos__container__text{
  text-align: left;
}
.todos__text__completed{
  color: #cfcfcf;
  text-decoration: line-through;
}
</style>
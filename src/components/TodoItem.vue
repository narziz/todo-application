<template>
    <div class="todos__item">
        <div class="todos__left">
          <div class="todos__container todos__container__checkbox">
            <button v-on:click="editCompleted(todo)" class="todo__button todo__button__check">
              <label v-bind:for="todo.id">
                <span v-show="completed"><i class="fas fa-check"></i></span>
              </label>
              <input 
                hidden
                v-bind:id="todo.id"
                v-bind:checked="completed"
                class="todos__checkbox" type="checkbox" />
            </button>
          </div>
          <div class="todos__container todos__container__text">
            <textarea
              v-bind:value="todo.title"
              v-on:input="editText = $event.target.value"
              v-if="editMode"
              v-on:keyup.enter="editTodo(todo)" 
              class="todo__input todo__input__edit" 
              type="text" 
              name="text" wrap="soft" ></textarea>
            <span
                class="todos__text"
                v-else 
                v-bind:class="{'todos__text__completed': completed }"><slot></slot></span>
          </div>
        </div>
        <div class="todos__right">
            <button v-on:click="toggleEditMode()" class="todo__button todo__button__edit"><i class="fas fa-edit"></i></button>
            <button v-on:click="deleteTodo(todo)" class="todo__button todo__button__delete"><i class="fas fa-times"></i></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: ['todo'],
    data() {
      return {
        completed: this.todo.completed,
        editMode: false,
        editText: ''
      }  
    },
    methods: {
      editTodo(todo){
        this.editMode = false;
        this.$store.dispatch('editTodo', {
          todo: todo,
          editText: this.editText
        });
      },

      editCompleted(todo){
        this.completed = !this.completed;
        this.$store.dispatch('editTodo', {
          todo: todo,
          done: this.completed
        });
      },

      deleteTodo(todo){
        this.$store.dispatch('deleteTodo', todo);
      },
      
      toggleEditMode(){
        this.editMode = !this.editMode;
      }
    }

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

.todo__input{
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #cfcfcf;
  
}
.todo__input__edit{
  border-radius: 4px;
  max-width: 100%;
}
.todos__left{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
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
  pointer-events: none;
}
.todo__button__check label i{
  pointer-events: none;
}
.todos__container__text{
  text-align: left;
  width: 100%;
}
.todos__text__completed{
  color: #cfcfcf;
  text-decoration: line-through;
}
</style>
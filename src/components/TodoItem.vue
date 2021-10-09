<template>
    <div class="todos__item">
        <div class="todos__left">
          <div class="todos__container todos__container__checkbox">
            <button v-on:click="editCompleted(todo)" class="todo__button todo__button__check">
              <label v-bind:for="todo.id">
                <span class="todo__button__icon" v-show="completed"><i class="fas fa-check-circle"></i></span>
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
        this.$store.dispatch('editCompleted', {
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

<style src="../assets/css/layouts/todoItem.css" scoped></style>
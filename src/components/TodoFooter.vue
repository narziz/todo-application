<template>
    <div class="footer_nav__container">
        <ul class="footer_nav">
            <li 
                v-for="item in nav" 
                :key="item.key"
                :class="{'footer_nav__active': item.key == showNav}"
                v-on:click="activateNav(item.key), filterTodos(item.key)" 
                class="footer_nav__item" >
                <button class='todo__button footer_nav__button__show'>{{ item.text }}</button>
            </li>
        </ul>
    </div>
    <div>
        <button 
            v-on:click="deleteAllCompleted()" 
            class="todo__button footer_nav__button__clear">Clear Completed</button>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'TodoFooter',
    computed: {
        ...mapState(['nav', 'showNav'])
    },
    methods: {
        activateNav(key){
            this.$store.dispatch('activateNav', key)
        },
        filterTodos(key){
            this.$store.dispatch('filterTodos', key)
        },
        deleteAllCompleted(){
            this.$store.dispatch('deleteAllCompleted');
        }
    }
}
</script>

<style src="../assets/css/layouts/todoFooter.css" scoped></style>
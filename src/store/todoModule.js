import { defineStore } from 'pinia';
import { ref } from 'vue';


export const useTodoStore = defineStore('todoStore', () => {
    let todos = ref([

    ])

    const moment = require('moment'); // require

    const userDate = moment().format('MM.DD.YYYY');
    
    return {todos, userDate}
})